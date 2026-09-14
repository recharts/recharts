import{R as t}from"./iframe-CCZR7NAh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-r76EBGup.js";import{R as l}from"./zIndexSlice-RhYtObCh.js";import{C as x}from"./ComposedChart-B5KY41wA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-F9qo_vnc.js";import{L as a}from"./Line-ByOfnKwX.js";import{X as c}from"./XAxis-BRz9nr_h.js";import{T as g}from"./Tooltip-gceL_MjA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-A6NnUU-m.js";import"./Text-BNhIgYfP.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./DOMUtils-BDfLWNCh.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RJSSngl5.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./RechartsWrapper-wkc56maS.js";import"./axisSelectors-BSioHzmv.js";import"./throttle-ZP6rSZKd.js";import"./d3-scale-CU88JBPJ.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./renderedTicksSlice-D9smLeXW.js";import"./index-1iFFgL5n.js";import"./CartesianAxis-DqSvII5H.js";import"./Layer-B2yEt3nd.js";import"./types-BX41f3Nu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./AnimatedItems-C_k0o8_C.js";import"./useAnimationId-DJLlQPal.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQGbjjmX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DgHvx5XO.js";import"./tooltipContext-Ax7Hq2F0.js";import"./RegisterGraphicalItemId-U6F3LrJb.js";import"./ErrorBarContext-j9HbImdV.js";import"./GraphicalItemClipPath-eRrs6_re.js";import"./SetGraphicalItem-DoozTt-Y.js";import"./getZIndexFromUnknown-CwURzt-E.js";import"./useGraphicalItemIdentity-BWyXW6pi.js";import"./Curve-7ikXqYG-.js";import"./step-CvhyldGl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dj4SzkHH.js";import"./Dot-CnbUvxwO.js";import"./getRadiusAndStrokeWidthFromDot-DBCpafJP.js";import"./useElementOffset-Dp3BrIi0.js";import"./uniqBy-CvvHfEZU.js";import"./iteratee-9vsqmnl8.js";import"./Cross-DwxM3WoF.js";import"./Sector-4D-ijm9Z.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
