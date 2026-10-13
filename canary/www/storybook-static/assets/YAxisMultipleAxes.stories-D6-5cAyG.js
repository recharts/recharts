import{R as t}from"./iframe-NhQV4prz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BZzMEbei.js";import{R as l}from"./zIndexSlice-CfLnBr12.js";import{C as x}from"./ComposedChart-BygaGWnl.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bnc6XT1L.js";import{L as a}from"./Line-CK7ZFz0J.js";import{X as c}from"./XAxis-Fp7U60n2.js";import{T as g}from"./Tooltip-BHAMG_eo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BUAYU6sx.js";import"./Text-BjHxixwZ.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./pageBackground-CDOOBPh1.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-L-3od7Tk.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./axisSelectors-CI2m5dZK.js";import"./throttle-DIKmaWkS.js";import"./d3-scale-DKOiWQKf.js";import"./CartesianAxis-Brd3Au8o.js";import"./Layer-BBUzG4Ds.js";import"./types-CquoFe81.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./index-Cmohh-L0.js";import"./index-DaOiqL7H.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BxN86ujp.js";import"./index-Dc9b_9OD.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./activeStyles-DbZl5mD5.js";import"./useAnimationId-CDdHAGde.js";import"./dataEntryStyles-C3Awxqtk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_Rp6Z4j.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B50xX2fH.js";import"./tooltipContext-8dIBQ8qH.js";import"./ErrorBarContext-C6WKrP5w.js";import"./GraphicalItemClipPath-BZY88hTL.js";import"./SetGraphicalItem-BE6zKb5c.js";import"./getZIndexFromUnknown-BDWbOpYM.js";import"./useEffectiveDataKey-CCR_17cw.js";import"./Curve-DQunGac-.js";import"./step-DAEVm6QR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BaOlHly8.js";import"./Dot-Bbsv88JT.js";import"./getRadiusAndStrokeWidthFromDot-V6X0dMwc.js";import"./useElementOffset-DkX5d6Uc.js";import"./uniqBy-eEafSCgx.js";import"./iteratee-1x0B9Dhz.js";import"./Cross-iti3Nuf1.js";import"./Sector-DbC0iSiQ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
