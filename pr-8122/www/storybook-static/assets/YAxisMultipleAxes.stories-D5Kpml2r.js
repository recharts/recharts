import{R as t}from"./iframe-GbU_LfIz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dl6RuWF8.js";import{R as l}from"./zIndexSlice-B-uY-xMG.js";import{C as x}from"./ComposedChart-B3bI5XzW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cwv5jiis.js";import{L as a}from"./Line-Cz7gfFzY.js";import{X as c}from"./XAxis-BQz4ccrC.js";import{T as g}from"./Tooltip-DycFhCat.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKofA95f.js";import"./Text-CcmXBTPp.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./throttle-lL1L3VRP.js";import"./axisSelectors-plpcnepy.js";import"./d3-scale-m-_CTi_p.js";import"./CartesianAxis-DWEGImEY.js";import"./Layer-DZ-BC5fp.js";import"./types-D5h1KHjm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CBlrkAx1.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./LabelList-BpWQDUee.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJMi75hX.js";import"./useAnimationId-3m5wK_ws.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./tooltipContext-DHOiC5Iy.js";import"./dataEntryStyles-C8Sz1tul.js";import"./ErrorBarContext-pjK3YX1O.js";import"./activeStyles-7gml8bSR.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getZIndexFromUnknown-AbKr_rc7.js";import"./useEffectiveDataKey-DF49AIat.js";import"./fillDefinitions-PlO8YUnf.js";import"./omit-nnSIzwj7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BXWlStzO.js";import"./step-B7eAtOky.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CJ_A0ZwJ.js";import"./Dot-BZZrGYAN.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./getRadiusAndStrokeWidthFromDot-DZIWxG1k.js";import"./useElementOffset-CMK7cZDC.js";import"./uniqBy-Db9I9r6H.js";import"./iteratee-DgfWwApm.js";import"./Cross-DDh9Rsms.js";import"./Sector-CW1nojyV.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
