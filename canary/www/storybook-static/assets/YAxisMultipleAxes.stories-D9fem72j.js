import{R as t}from"./iframe-Bo_zsOWR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CKvuzz2c.js";import{R as l}from"./zIndexSlice-OHt7JoW7.js";import{C as x}from"./ComposedChart-DjFfvHi0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-YM-qCCnO.js";import{L as a}from"./Line-BWClZ-ca.js";import{X as c}from"./XAxis-D98tl-gx.js";import{T as g}from"./Tooltip-CBfeQ_-p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-9TZrIdzh.js";import"./Text-bwywBWWq.js";import"./resolveDefaultProps-BUDDeE56.js";import"./DOMUtils-Bc-kV__a.js";import"./isWellBehavedNumber-DciPVP_A.js";import"./useId-DYywqoqR.js";import"./useBackwardsCompatibleTheme-Qf0ZXpAz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMSvUtDW.js";import"./index-BFt4SfZr.js";import"./index-PR_8Seu8.js";import"./RechartsWrapper-DXOTGCmH.js";import"./axisSelectors-CoIK-Kuy.js";import"./throttle-BqQSOARz.js";import"./d3-scale-CKJS4wTS.js";import"./index-krRAv2GK.js";import"./index-Mut52yxE.js";import"./renderedTicksSlice-CdFXeG0P.js";import"./index-DviWxMqn.js";import"./CartesianAxis-CKvATVWA.js";import"./Layer-CAovhaI5.js";import"./types-BNv_Hlvb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CzEQA5tK.js";import"./chartDataContext-Cxr8uE5y.js";import"./CategoricalChart-fHgXn9UL.js";import"./AnimatedItems-Ctbn0EH3.js";import"./useAnimationId-D_pJ9jTl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjhkbRaf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bp87fl58.js";import"./tooltipContext-RpjNvuhP.js";import"./RegisterGraphicalItemId-Cd8-cCZH.js";import"./ErrorBarContext-Dd08ywVQ.js";import"./GraphicalItemClipPath-Dbz5b6yM.js";import"./SetGraphicalItem-Drf2tYBV.js";import"./getZIndexFromUnknown-tiaLien0.js";import"./useGraphicalItemIdentity-jZjWs-3I.js";import"./Curve-BhTc2Eo1.js";import"./step-CUJcIDHf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BWLdti4e.js";import"./Dot-C29FoJO-.js";import"./getRadiusAndStrokeWidthFromDot-CoOWrleJ.js";import"./useElementOffset-BUX1YZEU.js";import"./uniqBy-DNoDnVLW.js";import"./iteratee-Bt5_-zpO.js";import"./Cross-DWRwsjTl.js";import"./Sector-Ba2-1_MP.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
