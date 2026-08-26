import{R as t}from"./iframe-DgQvZQyh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B-S92WaL.js";import{R as l}from"./zIndexSlice-Btq-n8Y8.js";import{C as x}from"./ComposedChart-BGAWRlKr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DDnQF_qs.js";import{L as a}from"./Line-ndrlyXuf.js";import{X as c}from"./XAxis-B4xwOvnI.js";import{T as g}from"./Tooltip-PE5z2rM6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D7SUzQZZ.js";import"./Text-BCNrLAhU.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./DOMUtils-Dc6imoC2.js";import"./isWellBehavedNumber-1FtJDRA4.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-COjkhmxj.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./RechartsWrapper-DQot8Dvj.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./throttle-Dk-DfWHx.js";import"./axisSelectors-VvYM7u3M.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./CartesianAxis-BguBsSE9.js";import"./Layer-jy0y6JzX.js";import"./types-DyDamtmF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./CategoricalChart-ZwyKDo7N.js";import"./AnimatedItems-CDuN3lv4.js";import"./useAnimationId-CMrpUBKd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkzbQ6sY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bdnMAsi3.js";import"./tooltipContext-DlkaB1DR.js";import"./RegisterGraphicalItemId-CgmuqVKA.js";import"./ErrorBarContext-C9gjoIKa.js";import"./GraphicalItemClipPath-wWG5NmBB.js";import"./SetGraphicalItem-WfznSmPk.js";import"./getZIndexFromUnknown-BCAFdLaP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9b0UCou.js";import"./Curve-ihXVzoU6.js";import"./step-ByO1iE7m.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Lw7-gIIJ.js";import"./Dot-Cp5LqDbN.js";import"./getRadiusAndStrokeWidthFromDot-zg-JnYSm.js";import"./useElementOffset-BASXZrSa.js";import"./uniqBy-rST57Vux.js";import"./iteratee-BL-nEGkT.js";import"./Cross-DJTs7157.js";import"./Sector-D-WZW2-Q.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
