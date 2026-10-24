import{R as t}from"./iframe-DwT3zBcw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Blmef7Zk.js";import{R as l}from"./zIndexSlice-B1c8R-o4.js";import{C as x}from"./ComposedChart-BRJHnsZA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BqReAFK0.js";import{L as a}from"./Line-BPX8zZ3-.js";import{X as c}from"./XAxis-DDMS_4GY.js";import{T as g}from"./Tooltip-CcGVX3TY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BJdAgAze.js";import"./Text-aRPMe4ci.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./pageBackground-DsM-Z0Rr.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYMRbOsR.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./axisSelectors-C7AasPYQ.js";import"./throttle-zQvI5ucF.js";import"./d3-scale-DKCZEfGq.js";import"./CartesianAxis-BOCUxksG.js";import"./Layer-DTu28EsQ.js";import"./types-CLejyp8C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-C8mRu_Mi.js";import"./index-BGcjFl-p.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-ytYCFw.js";import"./index-Bk7-Tdy1.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./activeStyles-0kotXHCs.js";import"./useAnimationId-BjdF1-gz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLCOL5Gn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./tooltipContext-Zx6HZVwu.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./ErrorBarContext-HVEt8c-6.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getZIndexFromUnknown-BmpsiiYo.js";import"./useEffectiveDataKey-BsFyVvUD.js";import"./omit-CqiIsrs9.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Bt6WU0fX.js";import"./step-Cf4wfTi4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DatcE_ix.js";import"./Dot-B9jMerXC.js";import"./getRadiusAndStrokeWidthFromDot-DuGu4d4H.js";import"./useElementOffset-BPhfD7za.js";import"./uniqBy-DSw40EQt.js";import"./iteratee-BWpKqSkU.js";import"./Cross-jElMP1_w.js";import"./Sector-DxUt_IOw.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
