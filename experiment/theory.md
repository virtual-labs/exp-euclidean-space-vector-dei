<span style="font-family: 'Times New Roman'; font-size: 21px;">This experiment has been designed to help students with the understanding of the 2-dimensional Euclidean space which is commonly visualized as the flat plane and is mathematically represented as the real vector space</span> $ R^{2} $, <span style="font-family: 'Times New Roman'; font-size: 21px;">essentially the set of all ordered pairs of real numbers, by exploring the relationship between points on the plane and elements in</span> $ R^{2} $. <span style="font-family: 'Times New Roman'; font-size: 21px;">Vector representation of a point in plane is also given. Thus students will gain a deeper appreciation of how geometry and linear algebra are interconnected. Besides, the experiment encourages learners to extend this understanding to more abstract, higher-dimensional spaces, thereby building a foundation for studying vector spaces, in general. Here,</span> $ N $ <span style="font-family: 'Times New Roman'; font-size: 21px;">and </span>$ R $ <span style="font-family: 'Times New Roman'; font-size: 21px;">denote the natural numbers and real number respectively. Let</span> $ N $ <span style="font-family: 'Times New Roman'; font-size: 21px;">and</span> $ R $ <span style="font-family: 'Times New Roman'; font-size: 18px;">denote the natural numbers and real numbers respectively.</span>

**1. 2-dimensional Euclidean Space:**
 The system ( $ R^{2} $ ,+ , . ) together with $ R $ is the 2-dimensional Euclidean space, where

**(i)**  $ R^{2} = \{( x , y) | (x , y)∈ R \}$ <br>
**(ii)** + , called addition, is defined as <br>
&emsp; $ (a , b) + (c, d) = ( a+c , b+d ) $; where $ (a , b) $ and $ (c , d) ∈ R^{2} $ <br>
**(iii)** . , called scalar multiplication, is defined as <br> 
&emsp;$ α.(a , b) = (α.a , α.b); $where $ α ∈ R $ and $ (a, b) ∈ R^{2} $. <br>

Note that,

**a.** In (ii), "+" on the left side is the addition of $ R^{2} $ and on the right side it is the addition of $ R^{2} $. For example, when (2, 3) and (1, 4) in $ R^{2} $ are added, we have (2, 3) + (1, 4) = (2+1, 3+4). Here ‘‘+’’ on the left side is the addition of $ R^{2} $ and on the right side it is the addition of $ R $.<br>
**b.** In (iii), "." on the left side is the scalar multiplication of $ R^{2} $ and on the right side it is the multiplication of $ R $. For example, when 2 in $ R $ and (2, 3) in $ R^{2} $ are multiplied, we have 2.(2, 3)=(2.2, 2.3). Here ‘‘.’’ on the left side is the scalar multiplication of $ R^{2} $ and on the right side it is the multiplication of $ R $.<br>

**2. Geometric Visualization:**
It is well known that there is a one-to-one correspondence between the plane and $ R^{2} $. That is, for each point on the plane there corresponds an element of $ R^{2} $ and conversely, to each element of $ R^{2} $ there is a point in the plane.<br> **It may be noted** that this association between points in the plane and the elements in $ R^{2} $ is with respect to a given pair of axes. Thus given a point on the plane, if we change the chosen axes, the element in $ R^{2} $ may be changed. Similarly, given an element in $ R^{2} $, if we change the chosen axes, a different point on the plane may be obtained.<br>
In the same manner,  $ R $  and  $ R^{3} $  can be identified with the line and space respectively. Such a visualization is not possible for $ R < R^{2} $  , for $ n>3 $.

**3. Math Model of Line, Plane and Space:**
The one-to-one correspondence between the plane and $ R^{2} $, described above provides an identification of plane with $ R^{2} $. Therefore $ R^{2} $ serves as a mathematical model for the study of the plane. Similarly, $ R $ and $ R^{3} $ serve as mathematical models for the study of the line and the space, respectively.

**4. Vector Representation:**
Let $ P $ be a point in the given Fig.1. Let $ (u, v) $ be the corresponding ordered pair. The line segment joining the origin and the point directed towards the point is called the vector at the origin associated with the point $ P $. Please see the diagram given below.

 ![Vector Representation](images/exp1newimage.jpeg "Vector Represntation")

**5. $ n $-dimensional Euclidean Space:**
 It is the system $( R^{n} , + , . ) $ together with $ R $, where $ R^{n} = \{(x_{1}, x_{2}, x_{3}, ... , x_{n}) | x_{1}, x_{2}, x_{3}, ... , x_{n} ∈ R\} $  and operations + and . called addition and scalar multiplication respectively are defined as:

**(i)**$ \{(x_{1}, x_{2}, x_{3}, ... , x_{n}) + (y_{1}, y_{2}, y_{3}, ... , (y_{n}) = (x_{1}+y_{1}, x_{2}+y_{2} , ... , x_{n}+y_{n})\}  $; where $ (x_{1}, x_{2}, x_{3}, ... , x_{n}), (y_{1}, y_{2}, y_{3}, ... , (y_{n}) ∈ R^{n} $ <br>
**(ii)** $ α.(x_{1}, x_{2}, x_{3}, ... , x_{n}) = (α.x_{1}, α.x_{2}, α.x_{3}, ... , α.x_{n}); $ where $ α ∈ R $ and $ (x_{1}, x_{2}, x_{3}, ... , x_{n}) ∈ R^{n} $

It can be geometrically visualised for $ 1 ≤ n ≤ 3 $ only. 

**6. Vector Space:**
 Let $ F=R $ or $ C $, where $ C $ is set of complex numbers which is described below in Note (ii). Given a non-empty set $ V $ and operations "+" **(called addition)** and "." **(called scalar multiplication)**, the system ($ V $ , + , .) together with $ F $ is called a **vector space** over $ F $, if the following conditions hold:

**For Addition:** <br>
&emsp; **i.** For each pair of elements $ x, y ∈ V $, there is a unique element $ x + y ∈ V $ <br> 
&emsp; **ii.** Commutativity: $ x + y = y + x $; for $ x, y ∈ V $ <br>
&emsp; **iii.** Associativity: $ (x + y) + z = x + (y + z) $, for $ x, y, z ∈ V $ <br>
&emsp; **iv.** Additive identity: There exists an element $ 0 ∈ V $ such that $ x + 0 = x $, for $ x ∈ V $.<br>
&emsp;  &emsp; This O which is the additive identity of ($ V $, +), is called the zero of $ V $ and is denoted by 0.<br>
&emsp; **v.** Additive inverse: For every $ x ∈ V $, there exists an element $ y ∈ V $ such that $ x + y $ = 0. This $ y $ is called the additive inverse of $ x $ and is denoted by $ -x $.

**For Scalar Multiplication:** <br>
&emsp; **i.** For each $ x ∈ V $ and $ a ∈ F $, there is a unique element $ a.x ∈ V $ <br>
&emsp; **ii.** Associativity: $ (ab.x = a.(bx) = x.(ab) $; for $ x ∈ V $ and $ a, b ∈ F $. <br>
&emsp; **iii.** 1.$ x = x.1 = x $, for $ x ∈ V $, where 1 is the additive identity of $ F $.

**Compatibility Conditions:** <br>
&emsp; **i.** Distributive Property 1: $ a.(x+y) = a.x + a.y $; for $ x, y ∈ V $ and $ a ∈ F $. <br> 
&emsp; **ii.** Distributive Property 2: $ (a+b).x = a.x + b.x $; for $ x ∈ V $ and $ a, b ∈ F $. 

**NOTE:** (i) The elements of $ F $ are called **scalars** and the elements of $ V $ are **vectors**. A vector space over $ F $ will be denoted by $ V $.<br> 
(ii) Let $ C $ be the set of complex numbers and each of its elements is denoted by $ a+ib $, where $ a, b ∈ R $.  The operations ‘‘+’’ (addition), ‘‘.’’ (scalar multiplication) and ‘‘.’’ (multiplication) on $ C $, defined as follows: <br> 
a. Addition: $ (a+ib)+(c+id)=((a+c)+(b+d)i) $, where $ (a+ib) $ and $ (c+id)∈C $. <br> 
b. Scalar multiplication: $ α.(a+ib)=(α.a+α.ib) $, where $ α ∈ R $ and $ (a+ib)∈ C $. <br> 
c. Multiplication: $ (a+ib).(c+id)=(ac-bd+(bc+ad)i) $, where $ (a+ib) $ and $ (c+id) ∈ C $.


**7. Example** <br>
&emsp; **i.** The system $ (R^{n}, +, .) $ is a vector space over $ R $, where addition and scalar multiplication are described above. The zero of this vector space is 0≡(0, 0, 0, …, 0). Thus elements of $ R^{n} $ are vectors and elements of $ R $ are scalars. In the particular case when $ n=1, $ elements of $ R $ are both vectors and scalars. <br>
&emsp; **ii.** The system $ (M^{2\times2}, +, .) $ is a vector space over $ R $, {where $ M^{2\times2} =  \begin{pmatrix} a & b \\ c & d \end{pmatrix} a, b, c, d \in R $ }, operation addition is defined to be $ \begin{pmatrix} a & b \\ c & d \end{pmatrix} + \begin{pmatrix} r & s \\ t & u \end{pmatrix} = \begin{pmatrix} a+r & b+s \\ c+t & d+u \end{pmatrix} $ and the operation scaler multiplication is defined to be $ α. \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} α.a & α.b \\ α.c & α.d \end{pmatrix}. $ The zero of this vector space is 0 $ \equiv \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}. $ <br> 
&emsp; **iii.** The system $ (R^{2} , +, .) $ is not a vector space over $ R $, where operations addition and scalar multiplication are described as follows:$ (x, y)+(a, b)=(x+a, 0) $, where $ x, y, a, b \in R $ and $ c(x, y)=(cx, 0) $; where $ c, x, y \in R $. Reason:  There does not exist $ (a, b) $ such that $ (2,1)+(a, b)=(2,1) $ because if exists, then $ (2+a, 0)=(2, 1) $ i.e. 0=1, a contradiction.  
 
**8. Properties**
Let $ V $ be a vector space over $ R $. For $ v, w ∈ V $ and $ α ∈ F $,

&emsp; **A.** 0.$ v $ = 0 <br>
&emsp;&emsp;   (0 on the left side is the zero of $ F $ and on the right side it is the zero of $ V $) <br>
&emsp; **B.** $ α.v = 0 $ implies $ α = 0 $ or $ v = 0 $ <br>
&emsp;&emsp;   $ (-1).x = -x, x ∈ V, -1 ∈ F $ <br> 
&emsp; **C.** $ α.v = α.w $ and $ α ≠ 0 $ implies $ v = w $.<br>
&emsp; **D.** Notice that $ v.w $ and $ v.α $ are not defined.

**9. Significance**
The study of $ n $-dimensional Euclidean space has enlightened research in many broad areas of science over the period of time. $ n $-dimensional spaces have since become one of the foundations for formally expressing modern mathematics and physics.
