import{R as t}from"./iframe-BvoaHdmy.js";import{a as s}from"./isWellBehavedNumber-BXi0lz-u.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BUyRK8f7.js";import{R as T}from"./zIndexSlice-Bsr7cBhR.js";import{C as M}from"./CartesianGrid-D6bYhLhX.js";import{X as $}from"./XAxis-CDpMlutO.js";import{Y as I}from"./YAxis-m3S-JfIe.js";import{L as O}from"./Legend-kPzq7o2Z.js";import{T as W}from"./Tooltip-CZZeT887.js";import{L as C}from"./Line-DRoM9ckZ.js";import{C as X}from"./Curve-B63hJeFK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DcaR1-NP.js";import"./RechartsWrapper-DtuASqVJ.js";import"./index-b13xllOW.js";import"./index-DeegS3pB.js";import"./index-B_-FbWrF.js";import"./index-BIiBQ2RS.js";import"./throttle-DQ4zUznN.js";import"./renderedTicksSlice-BOmSwCSv.js";import"./axisSelectors-Choe--Hk.js";import"./d3-scale-DHqQWI-P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DoxhMpsB.js";import"./chartDataContext-ChSxK7K-.js";import"./CategoricalChart-B1Q3to5_.js";import"./CartesianAxis-BTq7uWzR.js";import"./Layer-NFFKs1EA.js";import"./Text-D4sNDUmz.js";import"./DOMUtils-DEiR2hJy.js";import"./Label-DD7tXZFM.js";import"./ZIndexLayer-BJa50qFF.js";import"./types-Df8Ct0Qg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-w6Fo4fMR.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CxvE_--r.js";import"./symbol-CvaxCqXB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qwTb_lvS.js";import"./uniqBy-CX18kgZb.js";import"./iteratee-Br4cA1kY.js";import"./useAnimationId-CWnbJHBU.js";import"./Cross-DqfwSoA7.js";import"./Rectangle-D2ErbMHg.js";import"./util-Dxo8gN5i.js";import"./Sector-DUSA457Y.js";import"./AnimatedItems-xGZjbukT.js";import"./ActivePoints-BjVwwW5t.js";import"./Dot-BZ0HUF_R.js";import"./RegisterGraphicalItemId-pYDAMd0U.js";import"./ErrorBarContext-Dvj--byz.js";import"./GraphicalItemClipPath-CYhIxWIa.js";import"./SetGraphicalItem-CAucCLNl.js";import"./getRadiusAndStrokeWidthFromDot-C9Rzznad.js";import"./ActiveShapeUtils-DD4sF3hm.js";import"./step-8axYNU49.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
