import java.time.Year;
import java.util.concurrent.atomic.AtomicInteger;

public class RegistrationNumberGenerator {
    private static final AtomicInteger counter = new AtomicInteger(1);
    private static final String BRANCH_CODE = "CSE"; 

    public static String generateRegistrationNumber() {
        String year = String.valueOf(Year.now().getValue());
        int number = counter.getAndIncrement();
        return String.format("%s/%s/%04d", BRANCH_CODE, year, number);
    }

    public static void main(String[] args) {
        for (int i = 0; i < 15; i++) {
            System.out.println(generateRegistrationNumber());
        }
    }
}
