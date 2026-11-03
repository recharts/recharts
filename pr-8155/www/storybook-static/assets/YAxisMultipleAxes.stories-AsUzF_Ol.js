import{R as t}from"./iframe-DfQVKpWf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DMHv-5gA.js";import{R as l}from"./zIndexSlice-BRoA5zbQ.js";import{C as x}from"./ComposedChart-UT8hODIU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-3QTVc3kR.js";import{L as a}from"./Line-DBhsIsTX.js";import{X as c}from"./XAxis--NVg5Wna.js";import{T as g}from"./Tooltip-B1Qmb97M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dx4XJGMM.js";import"./Text-BguVyW-T.js";import"./resolveDefaultProps-BRVZcbQl.js";import"./DOMUtils-D9csGiWV.js";import"./ZIndexLayer-iHHFBTZW.js";import"./index-DLkRf9Xs.js";import"./index-Da3zhQui.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DE4p4RgX.js";import"./throttle-D0VENALV.js";import"./axisSelectors-nkYWEth-.js";import"./d3-scale-DC9kPgul.js";import"./CartesianAxis-bSSjBH_Z.js";import"./Layer-Dxd39IZi.js";import"./types-B0IgcrJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-COJW81My.js";import"./index-CLjBtDbF.js";import"./index-C3Wo1ixX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CbT_vqZg.js";import"./index-oM5BRh82.js";import"./fillDefinitions-DMhv-djT.js";import"./CartesianChart-BO_j1rd7.js";import"./ZIndexPortal-BgZ3mdtq.js";import"./CategoricalChart-CIbxz_h2.js";import"./LabelList-BjeX7Zh8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dho5taUB.js";import"./useAnimationId-Co3_Oxtg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dij93_Oc.js";import"./tooltipContext-C17Nxqi9.js";import"./dataEntryStyles-pydJZJI0.js";import"./ErrorBarContext-DMnuYRqA.js";import"./activeStyles-BlB0_IoV.js";import"./SetGraphicalItem-24_y6SOu.js";import"./getZIndexFromUnknown-BfvaioqB.js";import"./useEffectiveDataKey-BuvFv_YU.js";import"./omit-CZ4uP1Dh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BjBiMZvK.js";import"./step-BYgu61ra.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BKczNKsQ.js";import"./Dot-BJaFOnh2.js";import"./Symbols-C8CspVgJ.js";import"./symbol-D5X2owC8.js";import"./getRadiusAndStrokeWidthFromDot-BVeK6Pqm.js";import"./useElementOffset-D_4NA5oF.js";import"./uniqBy-Bvv0pG38.js";import"./iteratee-Dj2GE6VN.js";import"./Cross-Bmjz-AQU.js";import"./Sector-DCqZBsHb.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
