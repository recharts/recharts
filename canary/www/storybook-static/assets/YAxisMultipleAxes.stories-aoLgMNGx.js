import{R as t}from"./iframe-Knpgl7bH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BPwWglGS.js";import{R as l}from"./zIndexSlice-D_JvDPdC.js";import{C as x}from"./ComposedChart-Bz1qQazH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-2zwBs7Gn.js";import{L as a}from"./Line-CN57dnng.js";import{X as c}from"./XAxis-C-pGSkx8.js";import{T as g}from"./Tooltip-CLC2K7Jb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CUqt0NPv.js";import"./Text-2mzzLjyY.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./ZIndexLayer-B7sLboyu.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./throttle-CxSZxpUT.js";import"./axisSelectors-DzWAhEt3.js";import"./d3-scale-loN--ZL0.js";import"./CartesianAxis-d_ZDtRCQ.js";import"./Layer-BPxKddK_.js";import"./types-TSpqzzom.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-RFuLYV8r.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./chartDataContext-DMJoTbMZ.js";import"./CategoricalChart-BP24IEWh.js";import"./dataEntryStyles-CP1LR4vd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSFuXVLV.js";import"./useAnimationId-sq4gt-Rn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./tooltipContext-BYlYvGUW.js";import"./ErrorBarContext-CNCcQkpF.js";import"./activeStyles-Dx-Bb5mv.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./getZIndexFromUnknown-O-sWbfWX.js";import"./useEffectiveDataKey-DbJ28nvU.js";import"./omit-BSmtl1Wb.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-OQ1wYRa8.js";import"./Curve-CoppqT_1.js";import"./step-CX6BMVFF.js";import"./path-BBMZd4YL.js";import"./ActivePoints-CLrwMv3j.js";import"./Dot-B0z7ItJf.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./useElementOffset-lkTznI83.js";import"./uniqBy-BRZL2BBs.js";import"./iteratee-CHAMY_xX.js";import"./Cross-CFbCQW-3.js";import"./Sector-J3mzscDv.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
