import{R as t}from"./iframe-CgwPoQay.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D2N4RV8b.js";import{R as l}from"./zIndexSlice-Cwvky78x.js";import{C as x}from"./ComposedChart-Co7sgDaS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BkJVXfzS.js";import{L as a}from"./Line-CMHOXWP-.js";import{X as c}from"./XAxis-DOtySNzv.js";import{T as g}from"./Tooltip-E-dUB5_J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwBi1oPN.js";import"./Text-DLEzBygV.js";import"./resolveDefaultProps-CD_cqqva.js";import"./DOMUtils-DewFbXuK.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiLuwpYl.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./throttle-sMY3RlhH.js";import"./axisSelectors-D5ccOzPk.js";import"./d3-scale-DtIIfQy7.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./CartesianAxis-DLTPH4hp.js";import"./Layer-DjRO5iA4.js";import"./types-D2pCS11Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./AnimatedItems-9ERF5uBB.js";import"./useAnimationId-C35lEnnz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIlOeeWH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./tooltipContext-0v1e_mhm.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getZIndexFromUnknown-CcEba17n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ZuF58nAr.js";import"./Curve-a8euvDpU.js";import"./step-DTTmkP9p.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CCBXRjBa.js";import"./Dot-DB8vVey7.js";import"./getRadiusAndStrokeWidthFromDot-2t6d-1jI.js";import"./useElementOffset-BVRfxINV.js";import"./uniqBy-Du-asTiq.js";import"./iteratee-BR7CkU_G.js";import"./Cross-DkBXGZuy.js";import"./Sector-CWQKTn9v.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
