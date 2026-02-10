import{e as t}from"./iframe-D1NCNqUw.js";import{R as D,n as p}from"./arrayEqualityCheck-CQjIdQCx.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-s_0C4HOc.js";import{C as K}from"./CartesianGrid-Bd5YNvuL.js";import{X as T}from"./XAxis-u0hdrjRw.js";import{Y as M}from"./YAxis-A9YbMvOB.js";import{L as $}from"./Legend-DUBEmted.js";import{T as O}from"./Tooltip-DNRnEVuU.js";import{L as C}from"./Line-6NLHKn5o.js";import{R as W}from"./RechartsHookInspector-ZreWXCAw.js";import{C as X}from"./Curve-C3pHY6tL.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHOsEYDB.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./CartesianAxis-C56nwzMo.js";import"./Layer-BCRy6dX1.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./Label-BNrwDKuI.js";import"./ZIndexLayer-DGrkiEgC.js";import"./types-gvwBC4-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DMX5HiXT.js";import"./useElementOffset-CxGOc-CC.js";import"./iteratee-B-7bARrX.js";import"./Cross-DHzBM6ad.js";import"./Rectangle-BNiHE16P.js";import"./useAnimationId-CaRLwgfn.js";import"./Sector-TTqZtEvI.js";import"./ReactUtils-BB1Bvtm-.js";import"./ActivePoints-B3fzw2dP.js";import"./Dot-Cs7zSf6c.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./ErrorBarContext-DeYCKUhW.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./getRadiusAndStrokeWidthFromDot-CMWXAyTc.js";import"./ActiveShapeUtils-5Ae3vqBy.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BR4vRuXB.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
