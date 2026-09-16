import{R as t}from"./iframe-BBXYJHV9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BTJMRiMh.js";import{R as l}from"./zIndexSlice-DeV5nVkQ.js";import{C as x}from"./ComposedChart-CI6CKZVa.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DLUN89zU.js";import{L as a}from"./Line-BXAC9OJ9.js";import{X as c}from"./XAxis-OTNhB7fI.js";import{T as g}from"./Tooltip-j_66p5aX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-lRXxfB4K.js";import"./Text-D82BKuR8.js";import"./resolveDefaultProps-Cuufas3t.js";import"./DOMUtils-CzO3u12F.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTr1Fcax.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./RechartsWrapper--QMYLh37.js";import"./axisSelectors-ldrqaVXy.js";import"./throttle-D_5C5TP0.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./index-DaLQCs1D.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./CartesianAxis-a8cTgv_e.js";import"./Layer-CLVZjsru.js";import"./types-Bf4vH5cc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./AnimatedItems-Szq-E2F-.js";import"./useAnimationId-CBIZAPE4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BdigyXl7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./tooltipContext-C8i3kdxv.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./ErrorBarContext-CrrVco2B.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getZIndexFromUnknown-DTOzMFVG.js";import"./useGraphicalItemIdentity-DpGCweuE.js";import"./Curve-D-Wgwm0-.js";import"./step-CPCTXlnC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ogH_t-gd.js";import"./Dot-CeQpq0Ml.js";import"./getRadiusAndStrokeWidthFromDot-BRVPa3kE.js";import"./useElementOffset-DEgSccfA.js";import"./uniqBy-CSB_7q17.js";import"./iteratee--uwqTho3.js";import"./Cross-BIWd1Sy2.js";import"./Sector-1Qkm3USn.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
