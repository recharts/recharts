import{R as t}from"./iframe-C63NoaDu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DmSu88f8.js";import{R as l}from"./zIndexSlice-BcMwSK9m.js";import{C as x}from"./ComposedChart-DM4H6PYa.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B9SaaKQB.js";import{L as a}from"./Line-CkUNS1k-.js";import{X as c}from"./XAxis-C5OImGrG.js";import{T as g}from"./Tooltip-CgKolB4i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-1Vc72EU1.js";import"./Text-D_RBmkbp.js";import"./resolveDefaultProps-DjxgFVah.js";import"./DOMUtils-DA0ZRZ5p.js";import"./isWellBehavedNumber-BfhF-72O.js";import"./useId-BncxSM4U.js";import"./useBackwardsCompatibleTheme-DEjA-f8D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc9mNp0T.js";import"./index-C9CjOEex.js";import"./index-8uJ0bE2o.js";import"./RechartsWrapper-CTWFoE3n.js";import"./axisSelectors-LGmM4kiC.js";import"./throttle-dl1YLV6q.js";import"./d3-scale-CcYn43Vo.js";import"./index-DKS0oalo.js";import"./index-DO3tFlOP.js";import"./renderedTicksSlice-DIKEWQne.js";import"./index-CqricD4t.js";import"./CartesianAxis-BRA6gGeC.js";import"./Layer-Ckr3gw9l.js";import"./types-DUwSb1pu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ENzs0KXc.js";import"./chartDataContext-CfPmzzSW.js";import"./CategoricalChart-DHxPQS0Z.js";import"./AnimatedItems-DHS6gEFX.js";import"./useAnimationId-DcWGIqWl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvaDc6LC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DIOp6OW3.js";import"./tooltipContext-CXFD7G7p.js";import"./RegisterGraphicalItemId-CrhgcGtn.js";import"./ErrorBarContext-DjLWgwQU.js";import"./GraphicalItemClipPath-DNBzuX5X.js";import"./SetGraphicalItem-CsljS9zr.js";import"./getZIndexFromUnknown-BrA4QuOm.js";import"./useGraphicalItemIdentity-WzLoYH7A.js";import"./Curve-DkWZvTAe.js";import"./step-C-IAzoA3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-oZErJUce.js";import"./Dot-DkFiM3ON.js";import"./getRadiusAndStrokeWidthFromDot-DGM-tqki.js";import"./useElementOffset-Dr9avRqD.js";import"./uniqBy-C3wZtJ5H.js";import"./iteratee-QeKIrUD3.js";import"./Cross-DRnNZ4Nx.js";import"./Sector-bzDCgzGc.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
