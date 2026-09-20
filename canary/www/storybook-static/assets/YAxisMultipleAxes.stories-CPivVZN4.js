import{R as t}from"./iframe-CgFNOWkZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bn0ZQNQZ.js";import{R as l}from"./zIndexSlice-CnfPauoq.js";import{C as x}from"./ComposedChart-DAjKXGxr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bn0Vopfh.js";import{L as a}from"./Line-4xvbcNSQ.js";import{X as c}from"./XAxis-Bdjd5PBO.js";import{T as g}from"./Tooltip-hzNlJo4b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DM_lkfp6.js";import"./Text-BCy-48NS.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./DOMUtils-BuWky4GR.js";import"./isWellBehavedNumber-Cr26aOyF.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./RechartsWrapper-CU75wXMo.js";import"./axisSelectors-CDnWxexV.js";import"./throttle-CwNcKmkm.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./CartesianAxis-CE5tgyYR.js";import"./Layer-DQEpCXa4.js";import"./types-C1vo7smu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./AnimatedItems-UKua_m0c.js";import"./useAnimationId-DZ6wcHPj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lr0FbpfG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgLseHdF.js";import"./tooltipContext-BJIx6KUk.js";import"./RegisterGraphicalItemId-DQaeZdby.js";import"./ErrorBarContext-he3EC3WX.js";import"./GraphicalItemClipPath-BUB4x5xD.js";import"./SetGraphicalItem-CsabRogn.js";import"./getZIndexFromUnknown-CSaXLCzE.js";import"./useGraphicalItemIdentity-Z3uBGV6O.js";import"./Curve-O27qjVv6.js";import"./step-D28zNE0u.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DfS8V4yA.js";import"./Dot-DaO5ThZO.js";import"./getRadiusAndStrokeWidthFromDot-BfxRkwb-.js";import"./useElementOffset-DFZH7CAW.js";import"./uniqBy-B6NCt-4C.js";import"./iteratee-DHR339hL.js";import"./Cross-t6tx45j-.js";import"./Sector-ClDWYj6L.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
