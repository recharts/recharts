import{R as e}from"./iframe-C_py9VKy.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BQTm69sE.js";import{R as h}from"./zIndexSlice-CXPNbLh0.js";import{C as g}from"./ComposedChart-Dh9zcQ5L.js";import{L as x}from"./Line-COmMeHls.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-pH2VCnNX.js";import{T as V}from"./Tooltip-D5bH_ViD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./Label-DaE8MMQO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-cfs89nNi.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./throttle-y-97qzKM.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./axisSelectors-B-GKTKT_.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./Curve-Ca8nGQE4.js";import"./step-CMEfwDT5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BApiggtL.js";import"./useAnimationId-BmA3o4RX.js";import"./ActivePoints-VBrZY_w6.js";import"./Dot-CgRov5lu.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getRadiusAndStrokeWidthFromDot-CRhSkevf.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./useElementOffset-Z_Rs-D5L.js";import"./uniqBy-DjIUo5Dj.js";import"./iteratee-ZqN9mw6Q.js";import"./Cross-DS3tGU5b.js";import"./Rectangle-Dwgjvbsc.js";import"./util-Dxo8gN5i.js";import"./Sector-PxeYqRgC.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
