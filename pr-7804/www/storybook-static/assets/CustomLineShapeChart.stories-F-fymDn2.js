import{R as t}from"./iframe-CKftEeOR.js";import{a as p}from"./isWellBehavedNumber-B15AKauy.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C6mLp5od.js";import{R as T}from"./zIndexSlice-Rd7CQgQI.js";import{C as M}from"./CartesianGrid-C5zADhw1.js";import{X as $}from"./XAxis-IahfvaCM.js";import{Y as I}from"./YAxis-DtHNKlU_.js";import{L as O}from"./Legend-ERMTR0gC.js";import{T as W}from"./Tooltip-C-5yBIxR.js";import{L as C}from"./Line-CtyxKqH8.js";import{C as X}from"./Curve-DKcxqEob.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUD-thP6.js";import"./RechartsWrapper-CBr2vBLf.js";import"./axisSelectors-DhTPihhT.js";import"./throttle-BNKYmND6.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./CartesianAxis-klHqdii2.js";import"./Layer-t7Sk-OLm.js";import"./Text-BY0JJbaS.js";import"./DOMUtils-B_LhErBS.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./Label-BtMZmHcU.js";import"./ZIndexLayer-CfiakTBb.js";import"./types-CQiiKif5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BqO3Xqua.js";import"./symbol-Dma1RmVC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJqx9A--.js";import"./uniqBy-CLIdSOOo.js";import"./iteratee-Dl0nvfyM.js";import"./useAnimationId-cpDkl9it.js";import"./Cross-CrrRIKEY.js";import"./Rectangle-BOOPVSCO.js";import"./util-Dxo8gN5i.js";import"./Sector-DRJq0nZU.js";import"./AnimatedItems-ePjd4Kgp.js";import"./ActivePoints-D9o__0t3.js";import"./Dot-C7TV-TKY.js";import"./RegisterGraphicalItemId-rDiVUOUt.js";import"./ErrorBarContext-DliiI0LB.js";import"./GraphicalItemClipPath-C7Us-zic.js";import"./SetGraphicalItem-DS6Pgf_p.js";import"./getRadiusAndStrokeWidthFromDot-CeZqJgOi.js";import"./ActiveShapeUtils-B9DHSeBV.js";import"./useGraphicalItemIdentity-C7mRPXGd.js";import"./step-Bq5ebvyI.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
