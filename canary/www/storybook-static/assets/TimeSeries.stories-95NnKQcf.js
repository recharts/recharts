import{R as e}from"./iframe-DLS25dHQ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ZvceRVhD.js";import{R as h}from"./zIndexSlice-l2YZmfJm.js";import{C as g}from"./ComposedChart-3ReoGfqO.js";import{L as x}from"./Line-inZI_3U-.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BGUeNoA2.js";import{T as V}from"./Tooltip-B2aShKax.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-ByLvjEbn.js";import"./Layer-DThhki4j.js";import"./resolveDefaultProps-C31rpRZv.js";import"./Text-DoJs4GjF.js";import"./DOMUtils-B4V2lSh1.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./Label-Bs5nvBdN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVnRsL__.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./types-BNikxk5Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./throttle-Hx_xB1Pu.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./index-CbCT7aty.js";import"./axisSelectors-L-RJvPIw.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./Curve-D-nKyO-x.js";import"./step-CSyDwz3m.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-FlKGX8.js";import"./useAnimationId-BwYkYmq-.js";import"./ActivePoints-CxfQZGg2.js";import"./Dot-DrvJzzI1.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./ErrorBarContext-BMV815Qz.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getRadiusAndStrokeWidthFromDot-BcCKN7uZ.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./useElementOffset-DOuGmOFv.js";import"./uniqBy-CkpvLjjt.js";import"./iteratee-BC57QjIY.js";import"./Cross-DTxuUisw.js";import"./Rectangle-DyGyBKmJ.js";import"./util-Dxo8gN5i.js";import"./Sector-D2pai5wO.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
