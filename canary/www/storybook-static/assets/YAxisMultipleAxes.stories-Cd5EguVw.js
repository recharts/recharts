import{R as t}from"./iframe-Dpjo95BT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D506yA8K.js";import{R as l}from"./zIndexSlice-Bz9FHg4X.js";import{C as x}from"./ComposedChart-BechDuQ5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-l8MrXgR-.js";import{L as a}from"./Line-CKn7Dq4x.js";import{X as c}from"./XAxis-BTXqWGnk.js";import{T as g}from"./Tooltip-_jWWEhGs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DulCRYKX.js";import"./Text-8qrIJHOF.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./throttle-CgrRaOJs.js";import"./axisSelectors-DSxvh8IJ.js";import"./d3-scale-C6Aj8r2L.js";import"./CartesianAxis-BKOwU02Z.js";import"./Layer-dEC3lxZB.js";import"./types-CB3DqoLS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-B-kkbwvl.js";import"./index-CQjokYOg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BpzLbtwc.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./LabelList-DJoHLEEy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3bNmSLU.js";import"./useAnimationId-DXZwJd8h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./tooltipContext-C2Z-qwWl.js";import"./dataEntryStyles-0BlaoxRC.js";import"./ErrorBarContext-zCJLcJsR.js";import"./activeStyles-lY2Wk3Pa.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getZIndexFromUnknown-BQ02n8Sf.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./omit-BY7G6jYg.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DESeTImr.js";import"./step-CnW6P3zf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CqWN2Rf1.js";import"./Dot-CyMu6wKR.js";import"./Symbols-DoRtyuXb.js";import"./symbol-WOMD01oz.js";import"./getRadiusAndStrokeWidthFromDot-BbnzhDU0.js";import"./useElementOffset-DDmleafX.js";import"./uniqBy-C9-llrOR.js";import"./iteratee-CNDxe9py.js";import"./Cross-8DFI0rn1.js";import"./Sector-JUb9w246.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
