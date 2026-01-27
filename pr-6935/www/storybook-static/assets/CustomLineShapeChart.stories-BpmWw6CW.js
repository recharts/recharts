import{e as t}from"./iframe-IlsB_rJq.js";import{R as D,n as p}from"./arrayEqualityCheck-DRku3AZG.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DEh2todd.js";import{C as K}from"./CartesianGrid-Bw_j7iWQ.js";import{X as T}from"./XAxis-BQuXAPTr.js";import{Y as M}from"./YAxis-454ehxbM.js";import{L as $}from"./Legend-BG2d7PVa.js";import{T as O}from"./Tooltip-2VtOJr--.js";import{L as C}from"./Line-CDm7gB2t.js";import{R as W}from"./RechartsHookInspector-HlZdM34s.js";import{C as X}from"./Curve-BktJTjWe.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C3UkR7qf.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./zIndexSlice-CKbt9tj5.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./CartesianAxis-SxT37-Os.js";import"./Layer-vBbFq665.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./Label-DZIMKlIj.js";import"./ZIndexLayer-9CrWluzk.js";import"./types-tqXwELcn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DKmDvY-C.js";import"./useElementOffset-CdX39lF8.js";import"./iteratee-wUxeLBjz.js";import"./Cross-B8GjIZrQ.js";import"./Rectangle-DxgUhFQy.js";import"./useAnimationId-Bms0uFs7.js";import"./Sector-D5hYxMFM.js";import"./ReactUtils-Pssbr3N2.js";import"./ActivePoints-Cr8soWVC.js";import"./Dot-BxXnrLYt.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./ErrorBarContext-XG0EPrx-.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./getRadiusAndStrokeWidthFromDot-De11iLXV.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CcrDALRL.js";import"./index-Bb2whpql.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
