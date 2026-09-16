import{R as t}from"./iframe-BlpdekQf.js";import{a as p}from"./isWellBehavedNumber-DfaAxwlE.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CNca5PHW.js";import{R as T}from"./zIndexSlice-Bd-549Vw.js";import{C as M}from"./CartesianGrid-Bsi1n4U9.js";import{X as $}from"./XAxis-DCEI79gV.js";import{Y as I}from"./YAxis-DGARPD6V.js";import{L as O}from"./Legend-gO2rP5_l.js";import{T as W}from"./Tooltip-X6dFuoRk.js";import{L as C}from"./Line-DTtwP9ub.js";import{C as X}from"./Curve-DBrSRqYN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./RechartsWrapper-BZ46sqe8.js";import"./axisSelectors-DwVSh5EL.js";import"./throttle-8wef2bFQ.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./CartesianAxis-CTJL8AJc.js";import"./Layer-Cz4a7tst.js";import"./Text-CRM9x0B4.js";import"./DOMUtils-C_8Iq0XJ.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./Label-CrfPybH1.js";import"./ZIndexLayer-C5ftRxf2.js";import"./types-DYnYQX3g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BVv7h58j.js";import"./symbol-A-DI5JZL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1b8oROV.js";import"./uniqBy-ujuwYKfk.js";import"./iteratee-Bs0KMcjA.js";import"./useAnimationId-SlAZ3zMA.js";import"./Cross-Bkd6QGz9.js";import"./Rectangle-Bg9Sr7-8.js";import"./util-Dxo8gN5i.js";import"./Sector-b5JJyLMX.js";import"./AnimatedItems-BKOKH3Gm.js";import"./ActivePoints-C1DlvL6S.js";import"./Dot-BsVVT6T8.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getRadiusAndStrokeWidthFromDot-C3QjOZoW.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";import"./step-C7NW3t9J.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
