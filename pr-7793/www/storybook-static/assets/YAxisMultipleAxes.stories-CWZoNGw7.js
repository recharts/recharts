import{R as t}from"./iframe-BZt9gdNh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B6iDX6TN.js";import{R as l}from"./zIndexSlice-XuBBmNUo.js";import{C as x}from"./ComposedChart-j-NLk7cw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CzugaYFC.js";import{L as a}from"./Line-JaEdki4U.js";import{X as c}from"./XAxis-C8XTecZS.js";import{T as g}from"./Tooltip-LN81swq8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CgKCxMe1.js";import"./Text-CeEgQkK1.js";import"./resolveDefaultProps-D9AqqL0J.js";import"./DOMUtils-CENtu6Ky.js";import"./isWellBehavedNumber-Br3w71g0.js";import"./useId-BpCkPPis.js";import"./useBackwardsCompatibleTheme-B33DH1wF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUepW3qO.js";import"./index-Dp5cLYAc.js";import"./index-CaEFKWj4.js";import"./RechartsWrapper-Cay7o2ht.js";import"./axisSelectors-Cl7dH9vF.js";import"./throttle-B4vKrVKm.js";import"./d3-scale-GcIZdCoT.js";import"./index-B_o6Jv3Z.js";import"./index-B5FMXu9L.js";import"./renderedTicksSlice-CswugCrI.js";import"./index-DjzlGcMj.js";import"./CartesianAxis-Cv8lslC5.js";import"./Layer-DrcPzbE2.js";import"./types-Rk0FsTZp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B0JWnvwa.js";import"./chartDataContext-DfJ9Dq10.js";import"./CategoricalChart-qRJJqTbq.js";import"./AnimatedItems-dtI7DJaK.js";import"./useAnimationId-DFFh1fwK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DP-CYR2k.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BSpPce9D.js";import"./tooltipContext-BH9Rct5y.js";import"./RegisterGraphicalItemId-DHjWQaqm.js";import"./ErrorBarContext-Di40cu4W.js";import"./GraphicalItemClipPath-DFXU-IsT.js";import"./SetGraphicalItem-Bu5vFhfh.js";import"./getZIndexFromUnknown-Dr4bH8rT.js";import"./useGraphicalItemIdentity-CraBFHaJ.js";import"./Curve-CNkmv-tl.js";import"./step-Cs04DkZC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-x646kZg_.js";import"./Dot-Baaq2D37.js";import"./getRadiusAndStrokeWidthFromDot-BR61MnO_.js";import"./useElementOffset-CNPicTEJ.js";import"./uniqBy-C655Zvfo.js";import"./iteratee-DgWSL6uQ.js";import"./Cross-Uqz2jl8U.js";import"./Sector-C75D8sD3.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
