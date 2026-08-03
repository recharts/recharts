import{R as e}from"./iframe-zGdozCQh.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-PIf9M3x3.js";import{R as h}from"./zIndexSlice-CEf5y4wD.js";import{C as g}from"./ComposedChart-Dqdl2vPn.js";import{L as x}from"./Line-pA2XX7ul.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-MsmZCvzu.js";import{T as V}from"./Tooltip-CstuRqLn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-7tIOhqG7.js";import"./Layer-C16c9YM8.js";import"./resolveDefaultProps-DGss-nCf.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./Label-Cn4tQISS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BxlIB-HR.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./types-D_e406XV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BCsCwo08.js";import"./throttle-DvYlmrcU.js";import"./RechartsThemeContext-DKHHji-l.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./axisSelectors-BKjuK8lH.js";import"./CartesianChart-C5t9uLew.js";import"./chartDataContext-cAMS_PG1.js";import"./CategoricalChart-BpCZjXPz.js";import"./Curve-4P44R3Ym.js";import"./step-B84DZizD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-jN_ADWTf.js";import"./useAnimationId-ZvRvsbh2.js";import"./ActivePoints-CAJ4vJY1.js";import"./Dot-D23X09CK.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./ErrorBarContext-5XLz8TVO.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./graphicalItemIdentity-CDiHfDkn.js";import"./ActiveShapeUtils-9hROMAJM.js";import"./useElementOffset-DESkP0lj.js";import"./uniqBy-CNAGsW9V.js";import"./iteratee-BrMUzA5Z.js";import"./Cross-FBwxDX_O.js";import"./Rectangle-Cys6_Hxz.js";import"./util-Dxo8gN5i.js";import"./Sector-DoePNCKc.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
