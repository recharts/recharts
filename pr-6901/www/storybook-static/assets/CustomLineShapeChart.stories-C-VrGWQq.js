import{e as t}from"./iframe-majBtK-E.js";import{R as D,n as p}from"./arrayEqualityCheck-DVgUr5sF.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DJXD555b.js";import{C as K}from"./CartesianGrid-BX5yW7yI.js";import{X as T}from"./XAxis-BuPlQDHV.js";import{Y as M}from"./YAxis-RBaLqt0k.js";import{L as $}from"./Legend-Da08p0Hb.js";import{T as O}from"./Tooltip-C8D7tST0.js";import{L as C}from"./Line-i7hbzGoO.js";import{R as W}from"./RechartsHookInspector-C8tTsK9b.js";import{C as X}from"./Curve-9TopWPhs.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4pC6M3l.js";import"./PolarUtils-CJsRsyos.js";import"./RechartsWrapper-0u9Ddv25.js";import"./hooks-oixdIqV0.js";import"./axisSelectors-Ce1DsLqd.js";import"./zIndexSlice-7SDVSN9y.js";import"./CartesianChart-BL_zgiIZ.js";import"./chartDataContext-CZTJj6RV.js";import"./CategoricalChart-D7h1yX10.js";import"./CartesianAxis-BrVqccJA.js";import"./Layer-BLDMzEqE.js";import"./Text-phE5o1Gx.js";import"./DOMUtils-mrrzRZs0.js";import"./Label-e34JrSXW.js";import"./ZIndexLayer-Dv76Cipi.js";import"./types-C6X4a6Ih.js";import"./Symbols-Cp35_dcw.js";import"./useElementOffset-Bj2_3CJS.js";import"./iteratee-_KdHQ80V.js";import"./Cross-CyZ2dbHO.js";import"./Rectangle-en3DGB-O.js";import"./useAnimationId-BsAnEyOV.js";import"./Sector-7pSu32ck.js";import"./ReactUtils-CnNdH0Da.js";import"./ActivePoints-BicyjPPL.js";import"./Dot-CQ-BA1l2.js";import"./RegisterGraphicalItemId-CiSdioED.js";import"./ErrorBarContext-DUFA32t0.js";import"./GraphicalItemClipPath-CMlJ6COV.js";import"./SetGraphicalItem-Bs7RhIp3.js";import"./getRadiusAndStrokeWidthFromDot-BhwwRVIx.js";import"./ActiveShapeUtils-CN13qk7C.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DktYSmhy.js";import"./index-C8KZ_CA2.js";import"./ChartSizeDimensions-CwqFjkkT.js";import"./OffsetShower-CIon6stJ.js";import"./PlotAreaShower-BUoNZ3NG.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
