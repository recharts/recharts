import{e as t}from"./iframe-B1pz1HPh.js";import{g as D,J as p}from"./arrayEqualityCheck-CGszzuoD.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-ZrG9ajDl.js";import{C as T}from"./CartesianGrid-DO8_5Fqv.js";import{X as M}from"./XAxis-BVzuhrCO.js";import{Y as $}from"./YAxis-CEBdEAk1.js";import{L as O}from"./Legend-P1HE0pVr.js";import{T as W}from"./Tooltip-Ck0ufXZT.js";import{L as C}from"./Line-CPHgJ6LO.js";import{R as X}from"./RechartsHookInspector-Ba9PVlAC.js";import{C as Y}from"./Curve-B-sQG2bq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BMF326Ad.js";import"./immer-D5ZK6-zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_DMEy6X.js";import"./index-CONuoc65.js";import"./hooks-_Fqb7rcn.js";import"./axisSelectors-rNwEbhlr.js";import"./d3-scale-COb-tvd6.js";import"./zIndexSlice-D685U5bi.js";import"./renderedTicksSlice-CvGe_rQ2.js";import"./CartesianChart-DW92cNBQ.js";import"./chartDataContext-CaM10qH-.js";import"./CategoricalChart-Bv4j4Ty_.js";import"./CartesianAxis-C3QEFHfw.js";import"./Layer-hEcP7t1Y.js";import"./Text-ZPZaoHNl.js";import"./DOMUtils-CC-NDZXa.js";import"./Label-C7IOirY6.js";import"./ZIndexLayer-B25MTFPC.js";import"./types-pm80QyIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DBDx59CA.js";import"./symbol-CkudipdP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dj-I9x6j.js";import"./uniqBy-Bz1DY9a7.js";import"./iteratee-ClpoV93B.js";import"./useAnimationId-DfZh1iG1.js";import"./Cross-xY40VCyk.js";import"./Rectangle-H0q-eroK.js";import"./Sector-BxI8FLBr.js";import"./ReactUtils-D8aneK3l.js";import"./ActivePoints-B2GiDi4o.js";import"./Dot-ISDNc-Qe.js";import"./RegisterGraphicalItemId-xTBgBnJK.js";import"./ErrorBarContext-uQPI7qhW.js";import"./GraphicalItemClipPath-uUb78tLM.js";import"./SetGraphicalItem-CRAPBDcO.js";import"./getRadiusAndStrokeWidthFromDot--ZrL2R-3.js";import"./ActiveShapeUtils-vc7pcnW8.js";import"./index-rYM0k6kK.js";import"./ChartSizeDimensions-DucsnCfP.js";import"./OffsetShower-C5l1TQVl.js";import"./PlotAreaShower-D97eaCHy.js";import"./step-C-YdGbob.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
