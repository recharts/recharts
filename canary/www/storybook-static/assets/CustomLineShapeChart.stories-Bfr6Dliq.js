import{e as t}from"./iframe-DltNrMbJ.js";import{R as D,n as p}from"./arrayEqualityCheck-LkDVdEVg.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Cj15NR9D.js";import{C as K}from"./CartesianGrid-Dc_J0SIm.js";import{X as T}from"./XAxis-CERTAhrM.js";import{Y as M}from"./YAxis-CJYvma9k.js";import{L as $}from"./Legend-nJk7JtSm.js";import{T as O}from"./Tooltip-Nwyb4wI1.js";import{L as C}from"./Line-D4wPLLT8.js";import{R as W}from"./RechartsHookInspector-CkUV0TxE.js";import{C as X}from"./Curve-DQJoehXa.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSmftLt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./hooks-BprzVDZg.js";import"./axisSelectors-CKIz14Qs.js";import"./zIndexSlice-BY2OfmK4.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./CartesianAxis-DfRV_-M5.js";import"./Layer-CESBlQPf.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./Label-WGWSnZjZ.js";import"./ZIndexLayer-BSXb5mnX.js";import"./types-ByzPfmmH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-VYn2rLNF.js";import"./useElementOffset-BISJ-SQc.js";import"./iteratee-1VRBEyg4.js";import"./Cross-BGIAn8Oc.js";import"./Rectangle-BEufvsiJ.js";import"./useAnimationId-BKMwNFd7.js";import"./Sector-CucAHJS5.js";import"./ReactUtils-q-DWoBEq.js";import"./ActivePoints-DLrkoeVF.js";import"./Dot-ClGJHhN-.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./ErrorBarContext-D_xaXEzA.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./getRadiusAndStrokeWidthFromDot-dG2TYa7y.js";import"./ActiveShapeUtils-Dt67byha.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-AkIt7Koc.js";import"./index-DSMvm7PG.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./OffsetShower-DW4GTDS2.js";import"./PlotAreaShower-DOQKbeSs.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
