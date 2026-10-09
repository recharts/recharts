import{R as t}from"./iframe-C7tNsTpK.js";import{a as p}from"./isWellBehavedNumber-w95Ql-ta.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-hdGTmI-u.js";import{R as T}from"./zIndexSlice-T7oa9RdZ.js";import{C as M}from"./CartesianGrid-ylPCaAVC.js";import{X as $}from"./XAxis-C2gvQZpV.js";import{Y as I}from"./YAxis-aXsdWW2g.js";import{L as O}from"./Legend-D7Umu2tl.js";import{T as W}from"./Tooltip-Bkt3Zwmg.js";import{L as C}from"./Line-CHcJJgNV.js";import{C as X}from"./Curve-BN4KP-pW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DbdXlzmI.js";import"./RechartsWrapper-BucpRp_7.js";import"./axisSelectors-CxImXzGX.js";import"./throttle-DNLiVZh5.js";import"./index-BESlF8Z2.js";import"./index-swZv8iIV.js";import"./d3-scale-CAID8NmZ.js";import"./index-BolqH0tk.js";import"./index-CS0OILw8.js";import"./renderedTicksSlice-j7Pa5BYg.js";import"./index-DDzOQsUA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_1K3lTu.js";import"./chartDataContext-B0xxoqnf.js";import"./CategoricalChart-Lk1sxOY3.js";import"./CartesianAxis-BaDX4wf1.js";import"./Layer-DP-YoZN_.js";import"./Text-UOL45mL4.js";import"./pageBackground-B-TVGQhf.js";import"./useId-6XeKOM79.js";import"./useBackwardsCompatibleTheme-BtQBwdq6.js";import"./Label-CEwaTgR3.js";import"./ZIndexLayer-jLHUg-ly.js";import"./types-OUsJcmF8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B0hmSjF7.js";import"./symbol-NUkZhKvQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zMNgU5oi.js";import"./uniqBy-Bwz-78ds.js";import"./iteratee-CFobVmxc.js";import"./useAnimationId-Bb7S2zXD.js";import"./Cross-CIuGt2Ca.js";import"./Rectangle-B75oFVmx.js";import"./util-Dxo8gN5i.js";import"./Sector-C-ovoHDi.js";import"./AnimatedItems-gSeOcFSg.js";import"./ActivePoints-BhhwgACW.js";import"./Dot-BqSzvkx_.js";import"./RegisterGraphicalItemId-CplM38Xw.js";import"./ErrorBarContext-Z3h8hxY9.js";import"./GraphicalItemClipPath-nv6N7UDG.js";import"./SetGraphicalItem-CiL25rkH.js";import"./getRadiusAndStrokeWidthFromDot-BJ6oq1Q3.js";import"./ActiveShapeUtils-5hficCmD.js";import"./useGraphicalItemIdentity-wn6P8Qk2.js";import"./step-wm288KJA.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
