import{e as t}from"./iframe-BXZsi3ZJ.js";import{R as D,n as p}from"./arrayEqualityCheck-Cr28DIq7.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DGJxQw4h.js";import{C as K}from"./CartesianGrid-DvwO1gtD.js";import{X as T}from"./XAxis-vWhvLlJA.js";import{Y as M}from"./YAxis-CF2_AxHC.js";import{L as $}from"./Legend-CwV2obUu.js";import{T as O}from"./Tooltip-CXAzYhU1.js";import{L as C}from"./Line-1az24r_p.js";import{R as W}from"./RechartsHookInspector-BcsNAcT5.js";import{C as X}from"./Curve-CD_JBQwm.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbqalEnK.js";import"./hooks-CeRNCNPw.js";import"./axisSelectors-DViO6aT3.js";import"./zIndexSlice-47t4gEct.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./CartesianAxis-D3TuOOex.js";import"./Layer-CHngc-aq.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./Label-BOPAlXUc.js";import"./ZIndexLayer-BN0SI8Of.js";import"./types-5-uOdbL9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CywLz0nT.js";import"./useElementOffset-CCimOZj2.js";import"./iteratee-pBQ1AHnD.js";import"./Cross-D7YmrLLh.js";import"./Rectangle-C086hGgA.js";import"./useAnimationId-DdIT7cjj.js";import"./Sector-CiJ5MIJx.js";import"./ReactUtils-Cp6NqBbj.js";import"./ActivePoints-C2rwBq_Q.js";import"./Dot-BSyucR2X.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./ErrorBarContext-a8MR5IC4.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./getRadiusAndStrokeWidthFromDot-h-LXgdKb.js";import"./ActiveShapeUtils-LYXTR8UQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CgIXwzIx.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
