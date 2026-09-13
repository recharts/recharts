import{R as t}from"./iframe-Ds6TFLkC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CXDThil-.js";import{R as l}from"./zIndexSlice-BKrqz3Xt.js";import{C as x}from"./ComposedChart-BETzNKL8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D9rrb2qc.js";import{L as a}from"./Line-DZDTbY-k.js";import{X as c}from"./XAxis-DBKmF-Ih.js";import{T as g}from"./Tooltip-CKAhxeGO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-2c4G7wLB.js";import"./Text-CQENvntP.js";import"./resolveDefaultProps-B7a2m4Ka.js";import"./DOMUtils-CAtVF91U.js";import"./isWellBehavedNumber-LBH0mcE-.js";import"./useId-DhelI0MM.js";import"./useBackwardsCompatibleTheme-eHtj-G5x.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BVTJP5jP.js";import"./index-ClPOgP6S.js";import"./index-C9niY2XO.js";import"./RechartsWrapper-CJwlXMvA.js";import"./axisSelectors-CNkxeY96.js";import"./throttle-5Eq1kaaq.js";import"./d3-scale-CUyqRA-V.js";import"./index-CVuBNUrf.js";import"./index-BuCwMnJX.js";import"./renderedTicksSlice-F4QCvYob.js";import"./index-BK5RQvEH.js";import"./CartesianAxis-CuptNImc.js";import"./Layer-DsMiZb8_.js";import"./types-DqUBeAy_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CQ_Lc8CK.js";import"./chartDataContext-8-sBB6AR.js";import"./CategoricalChart-mnoE3YYU.js";import"./AnimatedItems-Bite-60b.js";import"./useAnimationId-wJ9zl-lu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd2BLFBG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJP1sGvV.js";import"./tooltipContext-Fe8JrluY.js";import"./RegisterGraphicalItemId-B4xTnp7Z.js";import"./ErrorBarContext-CEkkj6v_.js";import"./GraphicalItemClipPath-C-q0-wOK.js";import"./SetGraphicalItem-A2_dyvg9.js";import"./getZIndexFromUnknown-Cf_oPZt1.js";import"./useGraphicalItemIdentity-onk1vmff.js";import"./Curve-dfqdvFF3.js";import"./step-DGJiOV5Z.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BxShO8-B.js";import"./Dot-BCPXm70l.js";import"./getRadiusAndStrokeWidthFromDot-C9T1jis-.js";import"./useElementOffset-BoqsUzu9.js";import"./uniqBy-BeoGAbMd.js";import"./iteratee-B_8zsxBW.js";import"./Cross-DKcxrN4I.js";import"./Sector-Bk0Joc-L.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
