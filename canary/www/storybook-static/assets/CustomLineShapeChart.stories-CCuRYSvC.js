import{R as t}from"./iframe-oSm8ncin.js";import{a as p}from"./isWellBehavedNumber-CCMQKmI-.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CRAJ5Pja.js";import{R as T}from"./zIndexSlice-DvT_amFo.js";import{C as M}from"./CartesianGrid-cmL_ACSA.js";import{X as $}from"./XAxis-rWMx021r.js";import{Y as I}from"./YAxis-BivtkPP6.js";import{L as O}from"./Legend-zntpUH-c.js";import{T as W}from"./Tooltip-078BydMz.js";import{L as C}from"./Line-DROjObTD.js";import{C as X}from"./Curve-0eRV3Tfk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CiTJI47d.js";import"./RechartsWrapper-DD_spGc2.js";import"./axisSelectors-CKiFWBK6.js";import"./throttle-Cx1ccipN.js";import"./index-BcLgASAz.js";import"./index-DhJ936Cx.js";import"./d3-scale-VuQaHR8V.js";import"./index-BEgTYoe2.js";import"./index-Bu5ia8Fq.js";import"./renderedTicksSlice-DvZXVX5V.js";import"./index-b9HoDQHW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-kW9NXKsO.js";import"./chartDataContext-Bj9GKAto.js";import"./CategoricalChart-_S_x7otk.js";import"./CartesianAxis-DnYW7AG9.js";import"./Layer-DyWXZatW.js";import"./Text-BWvwrxPl.js";import"./DOMUtils-BGxUAFyQ.js";import"./useId-BLP9z_DT.js";import"./useBackwardsCompatibleTheme-B6W0Pzfd.js";import"./Label-DPyx96_s.js";import"./ZIndexLayer-Csw-EOMR.js";import"./types-DFgJchiK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DoWcadNt.js";import"./symbol-DwizSsDc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4nozGT_V.js";import"./uniqBy-BItzAnk5.js";import"./iteratee-CvG7v8HH.js";import"./useAnimationId-Bxm77g86.js";import"./Cross-D-dBfYi-.js";import"./Rectangle-kf9gK_tK.js";import"./util-Dxo8gN5i.js";import"./Sector-BJs3gvjr.js";import"./AnimatedItems-BqDLnMl8.js";import"./ActivePoints-BDnVkWFc.js";import"./Dot-R8_RPRPn.js";import"./RegisterGraphicalItemId-BjlJzRIf.js";import"./ErrorBarContext--MZg4-Ns.js";import"./GraphicalItemClipPath-B4m_JP2k.js";import"./SetGraphicalItem-3c27uR51.js";import"./getRadiusAndStrokeWidthFromDot-CJie2LqZ.js";import"./ActiveShapeUtils-C_Yr1SfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-NYzyT-_J.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
