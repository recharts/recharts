import{R as t}from"./iframe-IXBD7Hhe.js";import{a as s}from"./isWellBehavedNumber-DuIg09Ee.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DC73wMG6.js";import{R as T}from"./zIndexSlice-Bx8LfIjs.js";import{C as M}from"./CartesianGrid-CO0Gigqi.js";import{X as $}from"./XAxis-XUByFPwA.js";import{Y as I}from"./YAxis-BVu4beHD.js";import{L as O}from"./Legend-BZbqyyhK.js";import{T as W}from"./Tooltip-DZ6XDHmc.js";import{L as C}from"./Line-CBDt_Hjf.js";import{C as X}from"./Curve-BH0BT-1U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./throttle-Cb9pxaut.js";import"./axisSelectors-Cllx2Xbl.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./CategoricalChart-CsZZ-_Ww.js";import"./CartesianAxis-vF0DZ8PI.js";import"./Layer-CznxcDV0.js";import"./Text-CKl7HfzI.js";import"./DOMUtils-CIca5pvR.js";import"./Label-COpsAeG1.js";import"./ZIndexLayer-BDgiHtX6.js";import"./types-ootxRHuI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BtcJIIdL.js";import"./symbol-DRjMj09s.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ChbU1jy5.js";import"./uniqBy-55gB6jpL.js";import"./iteratee-MNxXH5z8.js";import"./useAnimationId-DKTTaUff.js";import"./Cross-DxQQFwz_.js";import"./Rectangle-Cg0GC15e.js";import"./util-Dxo8gN5i.js";import"./Sector-D8tacgFs.js";import"./AnimatedItems-C0wExScK.js";import"./ActivePoints-CHxp0sMa.js";import"./Dot-CqTh5SAj.js";import"./RegisterGraphicalItemId-c9Yy-XmY.js";import"./ErrorBarContext-Bg5OE5lB.js";import"./GraphicalItemClipPath-DnF330yG.js";import"./SetGraphicalItem-D7LoeNCT.js";import"./getRadiusAndStrokeWidthFromDot-CdGZqJil.js";import"./ActiveShapeUtils-DQ7ehDLd.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CYiGRfb_.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ht=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
