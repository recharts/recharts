import{c as t}from"./iframe-Cvf4U4wn.js";import{a as p}from"./isWellBehavedNumber-D1x3hQfA.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-BOP6sgFp.js";import{g as M}from"./zIndexSlice-CO7DftJr.js";import{C as R}from"./CartesianGrid-CyV206l1.js";import{X as $}from"./XAxis-l3Ov2KAu.js";import{Y as I}from"./YAxis-CMM495nD.js";import{L as O}from"./Legend-BR-NF9xj.js";import{T as W}from"./Tooltip-QaWAXfYX.js";import{L as C}from"./Line-DYvazgCg.js";import{C as X}from"./Curve-DdUHzuyS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DcGEMmQ3.js";import"./resolveDefaultProps-_tlFTpxx.js";import"./RechartsWrapper-hVt29Fw0.js";import"./index-_osGLyvR.js";import"./index-84gp7b_-.js";import"./index-BqdhXxVe.js";import"./index-Ie5aROBq.js";import"./immer-CBt7R_8A.js";import"./renderedTicksSlice-C6GQfAg5.js";import"./axisSelectors-DVSbKCnr.js";import"./d3-scale-DPGKMlVi.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDk2GzyN.js";import"./chartDataContext-BwbL_Y5V.js";import"./CategoricalChart-Bqu7zn37.js";import"./CartesianAxis-BKWdoZud.js";import"./Layer-CDCy6J-l.js";import"./Text-Kfko65iu.js";import"./DOMUtils-0PFm0Zn3.js";import"./Label-DCVsgxMs.js";import"./ZIndexLayer-DmQbCY-Q.js";import"./types-CuBUAF5G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CgPS0jag.js";import"./symbol-DC3DdvQa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-WW4KUmBb.js";import"./uniqBy-BQjndAzO.js";import"./iteratee-CTJSODyf.js";import"./useAnimationId-DtyIsMoa.js";import"./Cross-CLjsubSm.js";import"./Rectangle-DlZf8ANQ.js";import"./Sector-Cc3eSa_T.js";import"./ReactUtils-CtvGvrJ3.js";import"./ActivePoints-CP_bslYY.js";import"./Dot-DEWSwyeJ.js";import"./RegisterGraphicalItemId-1iDEiZF0.js";import"./ErrorBarContext-d8hdoxRP.js";import"./GraphicalItemClipPath-D3CDUk-1.js";import"./SetGraphicalItem-wq1eCtaf.js";import"./getRadiusAndStrokeWidthFromDot-Cm80QE2r.js";import"./ActiveShapeUtils-BFe2i1Jy.js";import"./step-_BMXLB8G.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Bt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Bt as __namedExportsOrder,Gt as default};
