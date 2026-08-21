import{R as t}from"./iframe-DQS4myAB.js";import{a as s}from"./isWellBehavedNumber-zK_PJpDu.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Ds6S1qMZ.js";import{R as T}from"./zIndexSlice-CRKGO7km.js";import{C as M}from"./CartesianGrid-Bt2pjDXm.js";import{X as $}from"./XAxis-BNsLkqf_.js";import{Y as I}from"./YAxis-DYkI96_x.js";import{L as O}from"./Legend-DPd6A_Ew.js";import{T as W}from"./Tooltip-CxYlgvaJ.js";import{L as C}from"./Line-DQDSu0_w.js";import{C as X}from"./Curve-Biukq7ie.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIteYQ9K.js";import"./RechartsWrapper-A-SxCpKR.js";import"./index-Bqu6H91U.js";import"./index-CvvA9CVv.js";import"./index-C2aL9BgM.js";import"./index-DDMxvxUH.js";import"./throttle-BsoZ_hEn.js";import"./axisSelectors-DX4jdBfR.js";import"./d3-scale-5kESFzKL.js";import"./renderedTicksSlice-C2h8Z4jj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-T2RwwuUW.js";import"./chartDataContext-BIeQL6Ui.js";import"./CategoricalChart-bL4PqON3.js";import"./CartesianAxis-C-8QqbQf.js";import"./Layer-BZTFzIOK.js";import"./Text-GAhVF71G.js";import"./DOMUtils-DInenL_7.js";import"./useId-BeKVfcQc.js";import"./useBackwardsCompatibleTheme-CRkmgrCS.js";import"./Label-BA6rOHS2.js";import"./ZIndexLayer-HtJhw_Ro.js";import"./types-lJpcgJl2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DaXC8EnI.js";import"./symbol-DSYYJs8l.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5KK8MoQ.js";import"./uniqBy-0l2iaavs.js";import"./iteratee-dvdUg7Fc.js";import"./useAnimationId-C6swfQ_N.js";import"./Cross-Dbdnya2d.js";import"./Rectangle-CK6tGD2c.js";import"./util-Dxo8gN5i.js";import"./Sector-2N_veHnt.js";import"./AnimatedItems-B7OZIGbB.js";import"./ActivePoints-Di6LpqPi.js";import"./Dot-DsGcbXq1.js";import"./RegisterGraphicalItemId-Dq93b8dF.js";import"./ErrorBarContext-CpV7w0Pv.js";import"./GraphicalItemClipPath-CdlG8-5u.js";import"./SetGraphicalItem-CetdGSA-.js";import"./getRadiusAndStrokeWidthFromDot-TGRMyQOP.js";import"./ActiveShapeUtils-BHK0lPEL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CQkxY-v0.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
