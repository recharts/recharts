import{e as t}from"./iframe-DTmqf-89.js";import{R as D,n as p}from"./arrayEqualityCheck-B5lu4Lk9.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-B0igVroC.js";import{C as K}from"./CartesianGrid-BWgS--Va.js";import{X as T}from"./XAxis-FYHpftxu.js";import{Y as M}from"./YAxis-CBw5C5aG.js";import{L as $}from"./Legend-jGczB6xO.js";import{T as O}from"./Tooltip-B48YpUIk.js";import{L as C}from"./Line-CpV_TBN9.js";import{R as W}from"./RechartsHookInspector-1827yCK6.js";import{C as X}from"./Curve-B7xWVUlS.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C00TVibV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-COXu3P-w.js";import"./hooks-BU_yGiYF.js";import"./axisSelectors-C7PUT4HW.js";import"./zIndexSlice-Vv1FeqCv.js";import"./CartesianChart-BS9lWtNm.js";import"./chartDataContext-DSwc8Xm3.js";import"./CategoricalChart-D6K3dQ4i.js";import"./CartesianAxis-CyR9LutT.js";import"./Layer-BTS4uGxy.js";import"./Text-CUOaxD2f.js";import"./DOMUtils-B3KaDt1C.js";import"./Label-egeGTsC3.js";import"./ZIndexLayer-DxJNdv8G.js";import"./types-B8nej2n0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C_pVSGbd.js";import"./useElementOffset-BmwLjO6W.js";import"./iteratee-DI1oiyxN.js";import"./Cross-D7nduRMG.js";import"./Rectangle-rgqUccDm.js";import"./useAnimationId-CwTw9zZj.js";import"./Sector-CGOePyQw.js";import"./ReactUtils-byYmdu0g.js";import"./ActivePoints-Cjk-cffs.js";import"./Dot-Bi08gvdO.js";import"./RegisterGraphicalItemId-DzHJgvRB.js";import"./ErrorBarContext-CQrouc6N.js";import"./GraphicalItemClipPath-BMDqk7zi.js";import"./SetGraphicalItem-BFlL7NjP.js";import"./getRadiusAndStrokeWidthFromDot-C9PG8MX9.js";import"./ActiveShapeUtils-BRF5U1J5.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-jP0l7-Gz.js";import"./index-Csnv4pYo.js";import"./ChartSizeDimensions-DGu1LvxE.js";import"./OffsetShower-BXOIobIw.js";import"./PlotAreaShower-BatiQcKf.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
