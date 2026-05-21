import{e as t}from"./iframe-DNsUwX5k.js";import{g as D,J as s}from"./arrayEqualityCheck-XA4mGyWk.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-goQbOCfg.js";import{C as T}from"./CartesianGrid-Clyfm1N5.js";import{X as M}from"./XAxis-ONim8OVF.js";import{Y as $}from"./YAxis-C_-amdVX.js";import{L as O}from"./Legend-AtBpIshp.js";import{T as W}from"./Tooltip-CDQOdmLr.js";import{L as C}from"./Line-B6QUTRYX.js";import{R as X}from"./RechartsHookInspector-BUhXRUq2.js";import{C as Y}from"./Curve-BVLF1D_I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfvXjv4K.js";import"./immer-BPrEK5Rz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AU67btz7.js";import"./index-DYHZYw9F.js";import"./hooks-B6BHB-7W.js";import"./axisSelectors-YJUEl-2g.js";import"./d3-scale-Bdi71Qs5.js";import"./zIndexSlice-C-6628LZ.js";import"./renderedTicksSlice-JsYvqF2I.js";import"./CartesianChart-FHxIuFwU.js";import"./chartDataContext-A5vEwNfY.js";import"./CategoricalChart-C9xxMr9R.js";import"./CartesianAxis-Ctr04CZm.js";import"./Layer-DWNEDYKO.js";import"./Text-CaUPu0Ls.js";import"./DOMUtils-DEWL1h2i.js";import"./Label-DrlcblLQ.js";import"./ZIndexLayer-COBAY4xu.js";import"./types-DAXoUOiX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-JY5hg72Q.js";import"./symbol-CKZaVPZy.js";import"./step--sLhjxi-.js";import"./useElementOffset-DEU7ULV0.js";import"./uniqBy-PI0PJHxt.js";import"./iteratee-BuVbuqpH.js";import"./useAnimationId-gBW8_6W-.js";import"./Cross-zxjIy8Mi.js";import"./Rectangle-h1QYOt2M.js";import"./Sector-CETfwnvm.js";import"./ReactUtils-CLpPl2yo.js";import"./ActivePoints-BULqV-gI.js";import"./Dot-CqXou1PJ.js";import"./RegisterGraphicalItemId-C0Pyz4Je.js";import"./ErrorBarContext-D803I392.js";import"./GraphicalItemClipPath-DhAcpDyX.js";import"./SetGraphicalItem-BCtoQcNZ.js";import"./getRadiusAndStrokeWidthFromDot-Cq_xctji.js";import"./ActiveShapeUtils-CsZp4u_s.js";import"./isPlainObject-N__ihfse.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DDnY6d6S.js";import"./index-DbbfyfFF.js";import"./ChartSizeDimensions-DUMsduP3.js";import"./OffsetShower-yJre-SEb.js";import"./PlotAreaShower-BRZz345m.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,zt as default};
