import{R as e}from"./iframe-C0ZUsupJ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CEau4At0.js";import{R as h}from"./zIndexSlice-OijFhdu6.js";import{C as g}from"./ComposedChart-9XUsCVAP.js";import{L as x}from"./Line-GWKTyGlv.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cab4s2n5.js";import{T as V}from"./Tooltip-CllFbgj2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DKb0zYvY.js";import"./CartesianAxis-CRBuloTO.js";import"./Layer-BvM0W8cF.js";import"./resolveDefaultProps-CFzFI254.js";import"./Text-Rgvblv2w.js";import"./DOMUtils-C2N7ljjM.js";import"./isWellBehavedNumber-DY6SAaVJ.js";import"./Label-zyObFa2R.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BTGgoWh-.js";import"./index-CWmFnIlt.js";import"./index-qQ2Np5IV.js";import"./types-BB9QSyE9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CdGxqG4t.js";import"./throttle-C0jUqI7U.js";import"./RechartsWrapper-BP4cUW8r.js";import"./index-DMeIlV1g.js";import"./index-TZ5Clshf.js";import"./axisSelectors-DBehuelT.js";import"./CartesianChart-SF4H61CS.js";import"./chartDataContext-DULpfCbg.js";import"./CategoricalChart-BnZfW2OJ.js";import"./Curve-Dx8uylpR.js";import"./step-Bvy6aUz4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BucsPXo8.js";import"./useAnimationId-gV_9QBVg.js";import"./ActivePoints-CcGnfgvg.js";import"./Dot-BLe5foEI.js";import"./RegisterGraphicalItemId-kZ3u-TBa.js";import"./ErrorBarContext-CryOhevP.js";import"./GraphicalItemClipPath-CYUXkmtT.js";import"./SetGraphicalItem-BrVQB63z.js";import"./getRadiusAndStrokeWidthFromDot-C4MEnK3i.js";import"./ActiveShapeUtils-qSpTYyL4.js";import"./useElementOffset-DXpEJJ9m.js";import"./uniqBy-CHbMoB0U.js";import"./iteratee-DUmd7r17.js";import"./Cross-3JVi-ZEh.js";import"./Rectangle-D83EpkfQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Bn8GGJMt.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
