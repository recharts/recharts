import{R as t}from"./iframe-CRyknHcV.js";import{a as s}from"./isWellBehavedNumber-BT2IcqCv.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C0rZvnrn.js";import{R as T}from"./zIndexSlice-D94J06pN.js";import{C as M}from"./CartesianGrid-UsVPemXH.js";import{X as $}from"./XAxis-CQvMjduc.js";import{Y as I}from"./YAxis-DKnjJQyk.js";import{L as O}from"./Legend-C3KuxZ0g.js";import{T as W}from"./Tooltip-DJwNP3Cy.js";import{L as C}from"./Line-BKwpqhNN.js";import{C as X}from"./Curve-Cx7OO1Tc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./throttle-CdnYcrez.js";import"./axisSelectors-HI2cMDW5.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./CartesianAxis-Czm-DLiC.js";import"./Layer-tFywX8jB.js";import"./Text-AosieIGC.js";import"./DOMUtils-DDmVxA4T.js";import"./Label-Bb81vEf3.js";import"./ZIndexLayer-CO71XxiU.js";import"./types-CgTXGcnU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CzYfCG8Y.js";import"./symbol-BGzG6k2R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";import"./useAnimationId-B3genVAW.js";import"./Cross-dQK9qAfq.js";import"./Rectangle-C7u2937O.js";import"./util-Dxo8gN5i.js";import"./Sector-2l4dxI6m.js";import"./AnimatedItems-DuJcIC8o.js";import"./ActivePoints-DQSPDrQl.js";import"./Dot-Cg5Ch71G.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getRadiusAndStrokeWidthFromDot-CPUyhS2F.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CoZJp4zn.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
