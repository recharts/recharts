import{R as t}from"./iframe-B7xPXiPl.js";import{R as D,l as p}from"./zIndexSlice-DflaePKy.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B0CyzRGq.js";import{C as M}from"./CartesianGrid-Cd7TteQ1.js";import{X as $}from"./XAxis-w-quiWhJ.js";import{Y as I}from"./YAxis-Cu3FI7G-.js";import{L as O}from"./Legend-Dp2tckH4.js";import{T as W}from"./Tooltip-y-2oODya.js";import{L as f}from"./Line-BDZJuxNO.js";import{C as X}from"./Curve-CrTz1Ty2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-t98kZJWg.js";import"./throttle-BS8hni_u.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./RechartsWrapper-BcgQInkA.js";import"./axisSelectors-Bm0UGi6R.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVxlp6F9.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./CartesianAxis-CcCV8fyf.js";import"./Layer-CYZUIq4P.js";import"./Text-BexCT2h6.js";import"./ZIndexLayer-7qwpAdIl.js";import"./Label-YOyO9lVV.js";import"./types-CQsoFKaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ryxNmM2c.js";import"./uniqBy-C0NZ23ht.js";import"./iteratee-DojtXyrW.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Bi0MWfey.js";import"./Cross-B3a9BUmJ.js";import"./Rectangle-B2b4luYh.js";import"./util-Dxo8gN5i.js";import"./Sector-CHPeYTF4.js";import"./dataEntryStyles-C3moi0Z-.js";import"./ActivePoints-Ij5uM0Pj.js";import"./Dot-GE-iIyp3.js";import"./activeStyles-CHc73Nrw.js";import"./ErrorBarContext-DfxhnQqe.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getRadiusAndStrokeWidthFromDot-CdlEB0NM.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./useEffectiveDataKey-Bs8MhK-5.js";import"./step-DxMe6Ez2.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
