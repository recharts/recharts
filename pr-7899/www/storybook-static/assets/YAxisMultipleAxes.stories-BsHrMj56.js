import{R as t}from"./iframe-Bi3q5ica.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C54oD4nc.js";import{R as l}from"./zIndexSlice-3OSmdeIU.js";import{C as x}from"./ComposedChart-BJ-4k_4i.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B1zveR3y.js";import{L as a}from"./Line-BE5Ogd3G.js";import{X as c}from"./XAxis-hhEBl8YN.js";import{T as g}from"./Tooltip-CGByORWU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BY0KH6BI.js";import"./Text-Dc41Ok3C.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./DOMUtils-Daz026gj.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_YH5dyV.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./RechartsWrapper-BIVD6JFp.js";import"./axisSelectors-BxvzYEcA.js";import"./throttle-CZI3Ns_R.js";import"./d3-scale-Dy9_TWZx.js";import"./index-ngMl_c_9.js";import"./index-BUn-OEAP.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./index-BVwc-Jau.js";import"./CartesianAxis-BXx4NBAG.js";import"./Layer-CtQIi_dM.js";import"./types-3e9Y1DlN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./AnimatedItems-C5QOwiw_.js";import"./useAnimationId-Wfo4M9rJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfISYkIx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./tooltipContext-CRe5fb94.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./ErrorBarContext-Tsgmsoyf.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./getZIndexFromUnknown-DDPl0Fuw.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";import"./dataEntryStyles-CD1lWBWh.js";import"./Curve-C2iAxlmR.js";import"./step-BPB7nuaq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DNbrAlaG.js";import"./Dot-8HK_808i.js";import"./getRadiusAndStrokeWidthFromDot-Co8c106b.js";import"./useElementOffset-Cv1kBb51.js";import"./uniqBy-DtuySXID.js";import"./iteratee-9Tj9By3u.js";import"./Cross-LcVvAtGO.js";import"./Sector-DSj8bG7F.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
