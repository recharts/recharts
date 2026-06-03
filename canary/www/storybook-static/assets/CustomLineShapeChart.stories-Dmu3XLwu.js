import{c as t}from"./iframe-Bw01G05S.js";import{a as p}from"./isWellBehavedNumber-BdaQsoH1.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-BVLtlazi.js";import{g as M}from"./zIndexSlice-BVJPDscV.js";import{C as R}from"./CartesianGrid-khQZXWx3.js";import{X as $}from"./XAxis-TrLbUf6y.js";import{Y as I}from"./YAxis-leBvxI0P.js";import{L as O}from"./Legend-BTXBFyzF.js";import{T as W}from"./Tooltip-CsILSo3O.js";import{L as C}from"./Line-Z8smfELB.js";import{C as X}from"./Curve-CGu0Zh8a.js";import"./preload-helper-Dp1pzeXC.js";import"./get-PLF287kI.js";import"./resolveDefaultProps-BX9yAQwT.js";import"./RechartsWrapper-Dy3I_vud.js";import"./index-ChbgLzNl.js";import"./index-CnqP2OOu.js";import"./index-CpLIt3E_.js";import"./index-gPPvxt9l.js";import"./immer-vKd3rXCH.js";import"./renderedTicksSlice-BSWqpX2F.js";import"./axisSelectors-CYrXIzpV.js";import"./d3-scale-C81Lq6p_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmfxvnV2.js";import"./chartDataContext-DTGe0ZBk.js";import"./CategoricalChart-CJ_zmDdd.js";import"./CartesianAxis-D2bv38Ox.js";import"./Layer-_mE6wvdm.js";import"./Text-qrCQLdvB.js";import"./DOMUtils-CB0xgJC5.js";import"./Label-0YWOaiFB.js";import"./ZIndexLayer-CUHrFVWb.js";import"./types-BkmoQN99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-OmH1xCgA.js";import"./symbol-yiQ3AMIL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BJf-bgFc.js";import"./uniqBy-CJKAqM1m.js";import"./iteratee-CJNbtgLs.js";import"./useAnimationId-DfklYMDy.js";import"./Cross-8GydS8Lz.js";import"./Rectangle-BFTblrQi.js";import"./Sector-_FqA8Q5K.js";import"./ReactUtils-CPtpn3OS.js";import"./ActivePoints-CLH-5Llk.js";import"./Dot-KFQGNzLM.js";import"./RegisterGraphicalItemId-C6zAsVLj.js";import"./ErrorBarContext-DD6wo7ll.js";import"./GraphicalItemClipPath-Cn2vbNRH.js";import"./SetGraphicalItem-CbgDA4Hu.js";import"./getRadiusAndStrokeWidthFromDot-B2Lc250a.js";import"./ActiveShapeUtils-ChrAkVLT.js";import"./step-Ci-i76rd.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
