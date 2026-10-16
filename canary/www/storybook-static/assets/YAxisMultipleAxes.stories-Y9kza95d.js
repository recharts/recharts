import{R as t}from"./iframe-D9OaE0-D.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B27MwDT8.js";import{R as l}from"./zIndexSlice-C6kYgFGy.js";import{C as x}from"./ComposedChart-7wLgVQR2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BNJnbef3.js";import{L as a}from"./Line-6OD2KhpA.js";import{X as c}from"./XAxis-jEEi2ah-.js";import{T as g}from"./Tooltip-D5KEPQtn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DM3WzLWy.js";import"./Text-BzPsoW0G.js";import"./resolveDefaultProps-BdEIFooo.js";import"./pageBackground-Cv-86bVo.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_H7NPBA.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./axisSelectors-D_Wp4SpS.js";import"./throttle-C2SndTCZ.js";import"./d3-scale-C7A9n28f.js";import"./CartesianAxis-piiyQKSw.js";import"./Layer-D4toxw-K.js";import"./types-CXdLVzsF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-2JOV4OxH.js";import"./index-Dd8asFuH.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./activeStyles-8VQiBHQs.js";import"./useAnimationId-D-wfB7qE.js";import"./dataEntryStyles-Bho6MXC7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BseNEmt0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./tooltipContext-xzp5Odnb.js";import"./ErrorBarContext-CIfQ1Dv4.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./getZIndexFromUnknown-RJrKb_ME.js";import"./useEffectiveDataKey-B44sET-2.js";import"./Curve-BeWRx8o8.js";import"./step-BNV5-s-4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BxgbZhZA.js";import"./Dot-B6z8g14w.js";import"./getRadiusAndStrokeWidthFromDot-CakziVew.js";import"./useElementOffset-ZfP2Owcx.js";import"./uniqBy-yYv24bjR.js";import"./iteratee-4GlLraWT.js";import"./Cross-BGSaT5oq.js";import"./Sector-OwaEg4iu.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
