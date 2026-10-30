import{R as t}from"./iframe-BTkF_ck3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-xlfioMoU.js";import{R as l}from"./zIndexSlice-DMb1iT4y.js";import{C as x}from"./ComposedChart-s1Akoicf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DJns9iwc.js";import{L as a}from"./Line-D7qRA9BJ.js";import{X as c}from"./XAxis-XXOeJL4_.js";import{T as g}from"./Tooltip-BpiRcGXu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzrvAI-c.js";import"./Text-TXIjjn1-.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./throttle-C296Coau.js";import"./axisSelectors-CNaIfHAW.js";import"./d3-scale-BmgL8dDE.js";import"./CartesianAxis-BPFkFfQP.js";import"./Layer-DbGB2kqV.js";import"./types-8wxp4ZmL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./LabelList-2kTqXwcO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRH2iL4s.js";import"./useAnimationId-BxLJVC0T.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./tooltipContext-CfPN8kce.js";import"./dataEntryStyles-CxN2r_W-.js";import"./ErrorBarContext-nR9VGpMB.js";import"./activeStyles-DacmxpXN.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getZIndexFromUnknown-lCk3uQXh.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./fillDefinitions-BHSDIcCA.js";import"./omit-DEd-BCVA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-sIdkl0eW.js";import"./step-DBbPIMUm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-KDHW2NPu.js";import"./Dot-Doj0VDvS.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./getRadiusAndStrokeWidthFromDot-BR6gVE_1.js";import"./useElementOffset-Cl0zCrTJ.js";import"./uniqBy-CAi9PQ3u.js";import"./iteratee-zmWyJk5j.js";import"./Cross-DVTuHcBA.js";import"./Sector-DwUhOI5m.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
