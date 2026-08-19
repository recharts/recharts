import{R as t}from"./iframe-BxezfZww.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CLrmrnP-.js";import{R as l}from"./zIndexSlice-HcjonX2F.js";import{C as x}from"./ComposedChart-lZLISn57.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CxnpRt_n.js";import{L as a}from"./Line-C7LVm8Rz.js";import{X as c}from"./XAxis-CiqbzTox.js";import{T as g}from"./Tooltip-BzeniyA5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cwi7qDe-.js";import"./Text-BDhYhtIl.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./DOMUtils-DML8OagK.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DCAxC-a3.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./throttle-kDZpq7hG.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./CartesianAxis-DN3oreA6.js";import"./Layer-B7Lou8N3.js";import"./types-CqtRzysP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./AnimatedItems-szXuAxdz.js";import"./useAnimationId-DlB6WviS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EFbhg0-p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./tooltipContext-CfXPAL1U.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getZIndexFromUnknown-DySiGNfw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C5f0vLre.js";import"./Curve-D-Z_q46N.js";import"./step-Dc9pogTJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8-Z2u2e.js";import"./Dot-_cBoNrM4.js";import"./getRadiusAndStrokeWidthFromDot-BQG6lvrP.js";import"./useElementOffset-BSnhPvQn.js";import"./uniqBy-CZlT9ctG.js";import"./iteratee-B_pdIMYS.js";import"./Cross-D7EbwD05.js";import"./Sector-Dwyiw2NT.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
