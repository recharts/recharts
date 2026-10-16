import{R as t}from"./iframe-Dw3JnrOz.js";import{a as p}from"./isWellBehavedNumber-OYIp1mp-.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D_Nvczgo.js";import{R as T}from"./zIndexSlice-DzgPoe88.js";import{C as M}from"./CartesianGrid-BEVezCDw.js";import{X as $}from"./XAxis-CeCu2pnu.js";import{Y as I}from"./YAxis-D8Dw7kMb.js";import{L as O}from"./Legend-Bjj8c6w_.js";import{T as W}from"./Tooltip-DLsW_sVW.js";import{L as C}from"./Line-DnOr9vmN.js";import{C as X}from"./Curve-CzvKCniC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK31nY-V.js";import"./RechartsWrapper-DgRfQaZT.js";import"./axisSelectors-BViTer26.js";import"./throttle-KuOt2oEs.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./d3-scale-DtTNlvys.js";import"./index-NzzUdmM6.js";import"./index-eNZ0M5_3.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-6yBVDhmv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./CartesianAxis-ChIBsRH5.js";import"./Layer-L7RVOPKy.js";import"./Text-DV8khfZM.js";import"./pageBackground-tLsrP4n_.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./Label-Cbir5i7I.js";import"./ZIndexLayer-BbE4uISJ.js";import"./types-B5MEMPd3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNc52s_J.js";import"./symbol-Ckk61NXy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CR-G88er.js";import"./uniqBy-rRKFTRx_.js";import"./iteratee-BZWaCfv1.js";import"./useAnimationId-w1IecijC.js";import"./Cross-CaPmRdVx.js";import"./Rectangle-DdI5JjXa.js";import"./util-Dxo8gN5i.js";import"./Sector-DR8brdmt.js";import"./activeStyles-D2NfbCgD.js";import"./dataEntryStyles-BN9XKvZb.js";import"./ActivePoints-BwSbWjwk.js";import"./Dot-BIHGbHYm.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getRadiusAndStrokeWidthFromDot-5uL5_6G5.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./useEffectiveDataKey-CnfRoJ-A.js";import"./step-D848BMKt.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
