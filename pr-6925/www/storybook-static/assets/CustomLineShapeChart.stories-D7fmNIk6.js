import{e as t}from"./iframe-CQZRorsz.js";import{R as D,n as p}from"./arrayEqualityCheck-CQz2flWD.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-vRLOM_Dv.js";import{C as K}from"./CartesianGrid-CAd5NfVG.js";import{X as T}from"./XAxis-BF5Pgeue.js";import{Y as M}from"./YAxis-ZJLISdMg.js";import{L as $}from"./Legend-BS5Pl9Uu.js";import{T as O}from"./Tooltip-C3LdudNm.js";import{L as C}from"./Line-D-WT-9y6.js";import{R as W}from"./RechartsHookInspector-C6yxPh9Y.js";import{C as X}from"./Curve-DrDC8HjY.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxEfcX11.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-3JJSXLuc.js";import"./hooks-8nQ0k4Um.js";import"./axisSelectors-CGQ8Nqi9.js";import"./zIndexSlice-DivviUqw.js";import"./CartesianChart-BcPUndnw.js";import"./chartDataContext-CFVBZ9Sm.js";import"./CategoricalChart-BLq3U5DT.js";import"./CartesianAxis-DCx-He5v.js";import"./Layer-BhxYv9l3.js";import"./Text-CY4lUY6F.js";import"./DOMUtils-CKyp5Bk3.js";import"./Label-BJgUEQlL.js";import"./ZIndexLayer-D-FGBInf.js";import"./types-Doxj5qxW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DuJw27Ks.js";import"./useElementOffset-BJytgDY9.js";import"./iteratee-CArEEeig.js";import"./Cross-D_sAlL5C.js";import"./Rectangle-BSDamI1k.js";import"./useAnimationId-DBhXyqXg.js";import"./Sector-CNW4UiZI.js";import"./ReactUtils-C6XrS2ih.js";import"./ActivePoints-BQmvxGKr.js";import"./Dot-CzK3gQom.js";import"./RegisterGraphicalItemId-CzLwNJmP.js";import"./ErrorBarContext-BV2zEajK.js";import"./GraphicalItemClipPath-DLLdlCGA.js";import"./SetGraphicalItem-BtJfHG9-.js";import"./getRadiusAndStrokeWidthFromDot-DfdfCJIf.js";import"./ActiveShapeUtils-C0gybZn4.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Cm1xY1NA.js";import"./index-hMecVWzD.js";import"./ChartSizeDimensions-DRFM_waE.js";import"./OffsetShower-CrJHGQg7.js";import"./PlotAreaShower-De7PuJHn.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
