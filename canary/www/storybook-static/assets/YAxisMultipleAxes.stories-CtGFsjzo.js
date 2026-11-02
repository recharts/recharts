import{R as t}from"./iframe-Bq5XC69E.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C-Z0y3eM.js";import{R as l}from"./zIndexSlice-CH_ot-kn.js";import{C as x}from"./ComposedChart-DMESowBx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cbc5Uo5e.js";import{L as a}from"./Line-CrvG0Qpi.js";import{X as c}from"./XAxis-CJ__L0zP.js";import{T as g}from"./Tooltip-C4OGC2Mk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CGkLvakU.js";import"./Text-BD2GyaNh.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./throttle-Ct-rPSxx.js";import"./axisSelectors-BOZBH3Nn.js";import"./d3-scale-MB7Peh3q.js";import"./CartesianAxis-D7JxrcAJ.js";import"./Layer-Cnu5LwAi.js";import"./types-L3YuI5Vg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-bjxa_6pD.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./LabelList-0FCseyju.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdaMHBMZ.js";import"./useAnimationId-DwGbNOL_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./tooltipContext-T6g8p_Fs.js";import"./dataEntryStyles-DVS0RaWt.js";import"./ErrorBarContext-JgTKdwbz.js";import"./activeStyles-BIBdu-Bw.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getZIndexFromUnknown-E-yaDm0v.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./omit-B5Gs5zHP.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BJhBX3YD.js";import"./step-CitgC7Ni.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BI0eNhe7.js";import"./Dot-DSeqyqR_.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./getRadiusAndStrokeWidthFromDot-BSwjIQeh.js";import"./useElementOffset-6RktWzhj.js";import"./uniqBy-DcVUePGP.js";import"./iteratee-D8dB9Iuu.js";import"./Cross-D0OQFgX7.js";import"./Sector-DAsJNitE.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
