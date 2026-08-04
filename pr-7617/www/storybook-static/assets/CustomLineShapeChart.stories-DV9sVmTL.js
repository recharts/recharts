import{R as t}from"./iframe-COvR6m4y.js";import{a as s}from"./isWellBehavedNumber-BMFlPjoz.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CkFIiRMm.js";import{R as T}from"./zIndexSlice-ou7P1k4B.js";import{C as M}from"./CartesianGrid-Cy9ZO17O.js";import{X as $}from"./XAxis-Dko6EwLt.js";import{Y as I}from"./YAxis-BmBZe_s0.js";import{L as O}from"./Legend-C2zR3K4b.js";import{T as W}from"./Tooltip-Bs0TNcBq.js";import{L as C}from"./Line-A2N_Jj9W.js";import{C as X}from"./Curve-C1YATuiv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./throttle-CwSdkZJ2.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./CartesianAxis-BfSFkfBG.js";import"./Layer-BxScpKop.js";import"./Text-CVNPXLFS.js";import"./DOMUtils-CI2tOPO2.js";import"./Label-DL7W3oea.js";import"./ZIndexLayer-fZm6clI3.js";import"./types-C40QwNfk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CMI7uChg.js";import"./symbol-C_Kkl2c9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzVnQFDP.js";import"./uniqBy-Cwho9xkh.js";import"./iteratee-C7AvrAG1.js";import"./useAnimationId-Cb3gVBxS.js";import"./Cross-DD1n0aFu.js";import"./Rectangle-DqY-vkpx.js";import"./util-Dxo8gN5i.js";import"./Sector-BGs4NfRJ.js";import"./AnimatedItems-DVdwO1UF.js";import"./ActivePoints-BCa4N9Pu.js";import"./Dot-COu3_HTT.js";import"./RegisterGraphicalItemId-DqoHzEMf.js";import"./ErrorBarContext-SLrJh98L.js";import"./GraphicalItemClipPath-BFgUMlnl.js";import"./SetGraphicalItem-CQMRhEff.js";import"./graphicalItemIdentity-KbS-c8wy.js";import"./ActiveShapeUtils-crCTkC1S.js";import"./step-CeMcQkHX.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
