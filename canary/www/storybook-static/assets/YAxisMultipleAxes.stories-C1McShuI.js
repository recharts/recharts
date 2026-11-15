import{R as t}from"./iframe-BEGj1koH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-pWnSqNwD.js";import{R as l}from"./zIndexSlice-CEJVfddR.js";import{C as x}from"./ComposedChart-Bzc4T97f.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-cVcoJ5om.js";import{L as a}from"./Line-wcAYZAbC.js";import{X as c}from"./XAxis-A5l93qYr.js";import{T as g}from"./Tooltip-BlRYrkch.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D38IadvQ.js";import"./Text-DjwfkybI.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./ZIndexLayer-DF1RNmQW.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bip_MddP.js";import"./throttle-9RbVUj4o.js";import"./axisSelectors-DNGVPDPw.js";import"./d3-scale-80plsouy.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DyBgNckc.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./dataEntryStyles-D0L-GBmA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Br2C5RSL.js";import"./useAnimationId-Dz0dpT6V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./tooltipContext-BmWDHX9R.js";import"./ErrorBarContext-DjI-jDw7.js";import"./activeStyles-BAv2bBi7.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getZIndexFromUnknown-BID1aVec.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./omit-N8syEmp0.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hlvSyv9M.js";import"./step-Cc4Umos1.js";import"./path-DyVhHtw_.js";import"./ActivePoints-htAl9rci.js";import"./Dot-CF8XQTEk.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./getRadiusAndStrokeWidthFromDot-CkygA61E.js";import"./useElementOffset-CiV49lwO.js";import"./uniqBy-C61gVEFe.js";import"./iteratee-BOHATSs8.js";import"./Cross-DnloOoyf.js";import"./Sector-D3cUvRcp.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
