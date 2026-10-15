import{R as t}from"./iframe-Bcbj5Yvj.js";import{a as p}from"./isWellBehavedNumber-Blk-fUEv.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BqaHlQW7.js";import{R as T}from"./zIndexSlice-BbtTmnct.js";import{C as M}from"./CartesianGrid-CNnGhmkB.js";import{X as $}from"./XAxis-BGoibDnX.js";import{Y as I}from"./YAxis-D0HGn8m-.js";import{L as O}from"./Legend-CZS9R5nb.js";import{T as W}from"./Tooltip-DImzhYnu.js";import{L as C}from"./Line-Ba2WmDpW.js";import{C as X}from"./Curve-DQG70g8F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C9cavZl8.js";import"./RechartsWrapper-JEGbB27w.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./throttle-1wXsTVJX.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./d3-scale-CzxKj8Wi.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-D1z8RJDy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./CartesianAxis-D8X_N5Aa.js";import"./Layer-DpGUUMWf.js";import"./Text-DXJV-9ud.js";import"./pageBackground-BH8UHhL6.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./Label-K9FSTyve.js";import"./ZIndexLayer-CyylKyYl.js";import"./types-CJ1XacmQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dv0jAL1Q.js";import"./symbol-Cs2ouPLI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";import"./useAnimationId-Bk7rAd-H.js";import"./Cross-Bcp7i6Mp.js";import"./Rectangle-C1N2Ym6v.js";import"./util-Dxo8gN5i.js";import"./Sector-D8HfX_lG.js";import"./activeStyles-MDW24FXq.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./ActivePoints-Byjchu2B.js";import"./Dot-4JIe_qSe.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getRadiusAndStrokeWidthFromDot-r0umV2Vo.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./useEffectiveDataKey-D3HkyWZy.js";import"./step-BVuNFWjf.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
