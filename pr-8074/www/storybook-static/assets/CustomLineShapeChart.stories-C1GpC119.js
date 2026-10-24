import{R as t}from"./iframe-B4_QwD1D.js";import{a as p}from"./isWellBehavedNumber-D8aaIUAh.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DXJV3rzv.js";import{R as T}from"./zIndexSlice-CBhoAbgS.js";import{C as M}from"./CartesianGrid-C1yY00qO.js";import{X as $}from"./XAxis-ClMwOqtx.js";import{Y as I}from"./YAxis-BXoC-zzw.js";import{L as O}from"./Legend-DI9r16Hx.js";import{T as W}from"./Tooltip-DXjxDqw5.js";import{L as C}from"./Line-B7tq3Xvl.js";import{C as X}from"./Curve-BO_4liKv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIsbUszc.js";import"./RechartsWrapper-D2uM5dQm.js";import"./axisSelectors-BPJ5zN30.js";import"./throttle-CoBiCp2n.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./d3-scale-DbsLf6d-.js";import"./index-DyH5gF1W.js";import"./index-BNmMl_IP.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-D5vd9j9o.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./Layer-Bwh0wvH7.js";import"./Text-D60EpHHD.js";import"./pageBackground-BarjFxCc.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./Label-bs3lrZa-.js";import"./ZIndexLayer-DLJnSwwV.js";import"./dataEntryStyles-C6hQpsCt.js";import"./types-OK8mrrgc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Ci7sUahQ.js";import"./symbol-45SraHnz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BsVVqcI3.js";import"./uniqBy-Cr-9UYKs.js";import"./iteratee-HAqVuPyF.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Dxw2C04Y.js";import"./Cross-CtxqpR8d.js";import"./Rectangle-QGBOtCIB.js";import"./util-Dxo8gN5i.js";import"./Sector-CD-FBM6S.js";import"./activeStyles-B6_AFvwr.js";import"./ActivePoints-BjOHnkRU.js";import"./Dot-5O5duGce.js";import"./RegisterGraphicalItemId-bXaHC85L.js";import"./ErrorBarContext-pg2dj6kz.js";import"./SetGraphicalItem-rmoRgud5.js";import"./getRadiusAndStrokeWidthFromDot-CaBRrUqE.js";import"./ActiveShapeUtils-Db0-CW4c.js";import"./useEffectiveDataKey-CJ0a7aYn.js";import"./step-ChTc0MMg.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
