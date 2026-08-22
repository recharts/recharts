import{R as t}from"./iframe-Ca32ubBP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-wOxJ_8VY.js";import{R as l}from"./zIndexSlice-dHiwLFUj.js";import{C as x}from"./ComposedChart-BtIdPlG5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D_h5ncsg.js";import{L as a}from"./Line-C8JVpIOW.js";import{X as c}from"./XAxis-Doj-lEYw.js";import{T as g}from"./Tooltip-BK7CRZ-e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DD1RmAzE.js";import"./Text-i5MeFzWV.js";import"./resolveDefaultProps-FNg74tNy.js";import"./DOMUtils-BJ447lE9.js";import"./isWellBehavedNumber-C-9KtVDX.js";import"./useId-BjxuxzLj.js";import"./useBackwardsCompatibleTheme-Ddp8u6f9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BAqimWYO.js";import"./index-8HLzHw6r.js";import"./index-CHnduxoF.js";import"./RechartsWrapper-C_dCGHdd.js";import"./index-CHNh1dey.js";import"./index-Dge3NWQD.js";import"./throttle-B0sCMXOK.js";import"./axisSelectors-A6ndeoHc.js";import"./d3-scale-Do2gUorH.js";import"./renderedTicksSlice-CpRpGU6M.js";import"./CartesianAxis-Dfpoi9-r.js";import"./Layer-B0UktO7Z.js";import"./types-_9LccsBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1u_uw1Q.js";import"./chartDataContext-Dgyo9muf.js";import"./CategoricalChart-CBCGNfzQ.js";import"./AnimatedItems-CDoRaH70.js";import"./useAnimationId-B8VHZUPO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLCrIZbS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-x7koemir.js";import"./tooltipContext-YohOR6ew.js";import"./RegisterGraphicalItemId-B_2qN3HQ.js";import"./ErrorBarContext-CAeoPaJo.js";import"./GraphicalItemClipPath-CrTkoGhX.js";import"./SetGraphicalItem-CnmA_FOG.js";import"./getZIndexFromUnknown-BvTB6FBq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DxjfMUKN.js";import"./Curve-BTmElVc4.js";import"./step-CYvNd-lj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BBA7jI6r.js";import"./Dot-B4PeYlma.js";import"./getRadiusAndStrokeWidthFromDot-BY_VbDBa.js";import"./useElementOffset-B__IOwrq.js";import"./uniqBy-Vn-_Z9lW.js";import"./iteratee-C66mF7I5.js";import"./Cross-CpfAzeAt.js";import"./Sector-B51nA7t4.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
