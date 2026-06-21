import{R as t}from"./iframe-BIq879V5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CWb6gVw3.js";import{R as l}from"./zIndexSlice-D4TMV-f8.js";import{C as x}from"./ComposedChart-Y-P0CO1c.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CNKjD13i.js";import{L as a}from"./Line-nYWcwLYL.js";import{X as c}from"./XAxis-BeATFl8n.js";import{T as g}from"./Tooltip-BdWrv2yu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dlp4HEDU.js";import"./CartesianAxis-DnWuLXim.js";import"./Layer-BQ46hdaR.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./isWellBehavedNumber-2nx214wI.js";import"./Label-CdyMu7UM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kG0uRxU5.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./types-sdPoIcnS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./immer-Bhe1IepA.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./tooltipContext-DkawCHMm.js";import"./AnimatedItems-Cplqb3ZM.js";import"./useAnimationId-7GzLXqBz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Be09360W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getZIndexFromUnknown-DrBS4-Wu.js";import"./graphicalItemSelectors-BIYOuh4B.js";import"./Curve-D0B4vo0F.js";import"./step-CMJu7Zx7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CAIFOa-o.js";import"./Dot-CeNBRJNR.js";import"./getRadiusAndStrokeWidthFromDot-Ezu5xS7M.js";import"./useElementOffset-De8Wm0sc.js";import"./uniqBy-Cuqkmugs.js";import"./iteratee-4c0JIRob.js";import"./Cross-CVqkxvmf.js";import"./Sector-Bk378S7z.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
