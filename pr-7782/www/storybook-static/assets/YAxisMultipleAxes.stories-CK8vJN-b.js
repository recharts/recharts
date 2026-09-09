import{R as t}from"./iframe-SqguF_NX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BezMzOf0.js";import{R as l}from"./zIndexSlice-BkiV0otE.js";import{C as x}from"./ComposedChart-Dvz2V-iv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BxpTKsb_.js";import{L as a}from"./Line-D3r5tZJE.js";import{X as c}from"./XAxis-P_and3Qh.js";import{T as g}from"./Tooltip-1kqVnrO0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Ln0updaQ.js";import"./Text-CGVR5o-9.js";import"./resolveDefaultProps-BXjF7TxP.js";import"./DOMUtils-C7uSFAMW.js";import"./isWellBehavedNumber-BVNp7Lfk.js";import"./useId-DDimChZF.js";import"./useBackwardsCompatibleTheme-Csth7N6u.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2JAxRQj0.js";import"./index-B3GChKJN.js";import"./index-DZzaZipo.js";import"./RechartsWrapper-DtX1Azw0.js";import"./axisSelectors-zCi_DHLv.js";import"./throttle-BK_PPAk1.js";import"./d3-scale-HQIXvxJU.js";import"./index-GGoi087z.js";import"./index-BzPNjXR5.js";import"./renderedTicksSlice-CMNm7EBg.js";import"./index-BH7LBhiS.js";import"./CartesianAxis-IyngpyO5.js";import"./Layer-DMTzFJJY.js";import"./types-C4DG-fsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-0Tm9s_Qh.js";import"./chartDataContext-Cw_Hfd-o.js";import"./CategoricalChart--bg0gB1r.js";import"./AnimatedItems-CVudD1tP.js";import"./useAnimationId-Cnc3ou0l.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CjC7DOQ8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8315rjX.js";import"./tooltipContext--ng7IK4Z.js";import"./RegisterGraphicalItemId-B2ssVdOY.js";import"./ErrorBarContext-CKOKE4j7.js";import"./GraphicalItemClipPath-DQVG9W_P.js";import"./SetGraphicalItem-DnieI-cg.js";import"./getZIndexFromUnknown-DEjmc-nM.js";import"./useGraphicalItemIdentity-CEMH6EIi.js";import"./Curve-TumiDsb0.js";import"./step-DI1tw62n.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BdsoqPbh.js";import"./Dot-D7HgwkXZ.js";import"./getRadiusAndStrokeWidthFromDot-C8zV7Km-.js";import"./useElementOffset-BfFEQnoo.js";import"./uniqBy-BQBFpjJ7.js";import"./iteratee-qNi8Ps_g.js";import"./Cross-BDK-fWel.js";import"./Sector-BwVtv9wk.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
